import { SelectedText } from './../../models/selected-text/selected-text';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SelectedTextProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SelectedTextProvider {

  constructor() {}

  getTextAreaSelectedText( text:string ) {
      /*let ionTextArea = window.getSelection().baseNode || document.getSelection().baseNode;
      let ionTextAreaChildNodes = ionTextArea.childNodes;
      let textAreaChildNode;

      for( let i = 0; i < ionTextAreaChildNodes.length; i++ ) {
        if( ionTextAreaChildNodes.item(i).nodeName === 'TEXTAREA' ) {
          textAreaChildNode = ionTextAreaChildNodes.item(i);
          break;
        }
      }*/

      let textAreaChildNode;

      let ionTextArea = document.getElementById("inputTextArea");
      if( ionTextArea ) {
        let textAreas = ionTextArea.getElementsByTagName("textarea");
        if( textAreas && textAreas.length > 0 ) {
          textAreaChildNode = textAreas.item(0);

          if( textAreaChildNode ) {
            let iSelectionStart = textAreaChildNode.selectionStart;
            let iSelectionEnd = textAreaChildNode.selectionEnd;
            let textAreaText = textAreaChildNode.value;
            if( textAreaText 
              && ( iSelectionStart != null && iSelectionStart != undefined) 
              && ( iSelectionEnd != null && iSelectionEnd != undefined) ) {
              let textBeforeSelection = textAreaText.substring( 0, iSelectionStart );
              let textAfterSelection = textAreaText.substring( iSelectionEnd );
              let selectedText = textAreaText.substring( iSelectionStart, iSelectionEnd );
              let selectedTextObj = new SelectedText( textAreaText, selectedText, textBeforeSelection, textAfterSelection );
              return selectedTextObj;
            }
          }

        }
      }
      return null;
  }

}
