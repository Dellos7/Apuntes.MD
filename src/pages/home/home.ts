import { SelectedTextProvider } from './../../providers/selected-text/selected-text';
import { Component, ViewChild, Input } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import marked from 'marked';
import { MarkdownUtilsProvider } from '../../providers/markdown-utils/markdown-utils';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toggleVal: boolean = false;
  plainText: string = '';
  content: string = '';

  constructor(public navCtrl: NavController, private selectedTextSvc: SelectedTextProvider,
              private markdownUtilsSvc: MarkdownUtilsProvider) {

  }

  convert() {
    if( this.toggleVal && this.plainText ) {
      this.content = marked( this.plainText.toString() );
    }
    else {
      this.content = '';
    }
  }

  format( mdFormatId: string ){
    let textAreaSelectedTextObj = this.getTextAreaSelectedText();
    if( textAreaSelectedTextObj != null ) {
      let selectedText = textAreaSelectedTextObj.selectedText;
      let textBeforeSelection = textAreaSelectedTextObj.textBeforeSelection;
      let textAfterSelection = textAreaSelectedTextObj.textAfterSelection;
      let mdFormat = this.markdownUtilsSvc.getMdFormatById( mdFormatId ); 
      this.plainText = 
        ( mdFormat
          ? mdFormat.format( selectedText, textBeforeSelection, textAfterSelection )
          : this.plainText );
    }
  }

  removeFormat() {
    let textAreaSelectedTextObj = this.getTextAreaSelectedText();
    if( textAreaSelectedTextObj != null ) {
      let selectedText = textAreaSelectedTextObj.selectedText;
      let textBeforeSelection = textAreaSelectedTextObj.textBeforeSelection;
      let textAfterSelection = textAreaSelectedTextObj.textAfterSelection;
      this.plainText = 
        ( this.getSelectedTextFormat( textBeforeSelection )
          ? this.getSelectedTextFormat( textBeforeSelection ).removeFormat( selectedText, textBeforeSelection, textAfterSelection )
          : this.plainText );
    }
  }

  getSelectedTextFormat( beforeSelectedText: string ) {
    return this.markdownUtilsSvc.getTextAppliedMd( beforeSelectedText );
  }

  getTextAreaSelectedText() {
    return this.selectedTextSvc.getTextAreaSelectedText( this.plainText );
  }

  stringReverse(str){
    return str.split("").reverse().join("");
  }

  removeFormatBeforeText( textBeforeSelection: string ) {
    let textBeforeSelectionReverse = this.stringReverse( textBeforeSelection );
    if( textBeforeSelectionReverse ) {
      let leftTagRegExp = new RegExp( ">(.*?)<" );
      textBeforeSelectionReverse = textBeforeSelectionReverse.replace( leftTagRegExp, "" );
      let textWithoutTag = this.stringReverse( textBeforeSelectionReverse );
      return textWithoutTag;
    }
    return "";
  }

  removeFormatAfterText( textAfterSelection: string ) {
    let rightTagRegExp = new RegExp( "</(.*?)>" );
    textAfterSelection = textAfterSelection.replace( rightTagRegExp, "" );
    return textAfterSelection;
  }

  getSelectedPosInStr(str, selected, iStart) {
    var strBefore = str.substr(0, iStart);
    var regExp = new RegExp(selected, "g");
    var countBefore = (strBefore.match(regExp) || []).length;
    return countBefore + 1;
  }

  replaceStringByIndexes( origStr, startIndex, endIndex, newStr ) {
    var a = origStr.substr(0, startIndex);
    var b = origStr.substr( startIndex + newStr.length );
    console.log(a);
    console.log(b);
    console.log(newStr);
    return a + newStr + b;
  }

}
