import { MarkdownFormat } from './../../models/markdown-format/markdown-format';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MarkdownUtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarkdownUtilsProvider {

  markdownFormats: MarkdownFormat[];

  constructor() {
    this.markdownFormats = [
      /*new MarkdownFormat( "h1", "# ", "Heading", "Heading", "#", "# (.*?)",
                          false, null, null, null, true ),*/
      new MarkdownFormat( "h2", "## ", "Heading h2", "Heading h2", "#", "\ #(?!#)",
                          false, null, null, null, true ),
      new MarkdownFormat( "h1", "# ", "Heading h1", "Heading h1", "#", "\ ##(?!#)",
                          false, null, null, null, true ),
      new MarkdownFormat( "b", "**", "Bold", "Bold", "*", "\\*\\*(.*?)" ),
      new MarkdownFormat( "it", "*", "Italics", "Italics", "*", "\\*(.*?)" ),
      new MarkdownFormat( "color-red", "", "Font color", "Font color", "red", 
                          ">(.*?)<", true, "</(.*?)>", "color", "red" ),
      new MarkdownFormat( "color-blue", "", "Font color", "Font color", "red", 
                          ">(.*?)<", true, "</(.*?)>", "color", "blue" )
    ];

  }

  stringReverse(str){
    return str.split("").reverse().join("");
  }

  getTextAppliedMd( textBefore: string ) {
    textBefore = this.stringReverse( textBefore );
    for( let mdFormat of this.markdownFormats ) {
      /*if( mdFormat.isHtmlTag ) {
        textBefore = this.stringReverse( textBefore );
      }*/
      let i = textBefore.search(mdFormat.replaceBeforeTextRegExp);
      if( i === 0 ) { //Buscar mejor forma de hacerlo
        return mdFormat;
      }
      else if( mdFormat.isHtmlTag ) {
        textBefore = this.stringReverse( textBefore );
      }
    }
  }

  getMdFormatById( id: string ) {
    for( let mdFormat of this.markdownFormats ) {
      if( mdFormat.id === id ) {
        return mdFormat;
      }
    }
    return null;
  }

}
