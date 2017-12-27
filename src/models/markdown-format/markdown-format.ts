
export class MarkdownFormat {

    id: string;
    mdFormat: string;
    name: string;
    description: string;
    symbol: string;
    isHtmlTag: boolean = false;
    replaceBeforeTextRegExp: RegExp;
    replaceAfterTextRegExp: RegExp;
    cssProperty: string;
    cssValue: string;

    constructor( id: string, mdFormat: string, name: string, description: string,
                symbol: string, replaceBeforeTextRegExp: string, 
                isHtmlTag?: boolean, replaceAfterTextRegExp?: string,
                cssProperty?: string, cssValue?: string ) {
        this.id = id;
        this.mdFormat = mdFormat;
        this.name = name;
        this.description = description;
        this.symbol = symbol;
        this.isHtmlTag = isHtmlTag;
        this.replaceBeforeTextRegExp = new RegExp(replaceBeforeTextRegExp);
        let _replaceAfterTextRegExp = replaceAfterTextRegExp;
        if( !replaceAfterTextRegExp ) {
            _replaceAfterTextRegExp = replaceBeforeTextRegExp;
        }
        this.replaceAfterTextRegExp = new RegExp( _replaceAfterTextRegExp );
        this.cssProperty = cssProperty;
        this.cssValue = cssValue;
    }

    stringReverse(str){
        return str.split("").reverse().join("");
    }
    
    removeFormatBeforeText( textBeforeSelection: string ) {
        let textBeforeSelectionReverse = this.stringReverse( textBeforeSelection );
        if( textBeforeSelectionReverse ) {
            textBeforeSelectionReverse = textBeforeSelectionReverse.replace( this.replaceBeforeTextRegExp, "" );
            let textWithoutTag = this.stringReverse( textBeforeSelectionReverse );
            return textWithoutTag;
        }
        return "";
    }

    removeFormatAfterText( textAfterSelection: string ) {
        let rightTagRegExp = new RegExp( this.replaceAfterTextRegExp  );
        textAfterSelection = textAfterSelection.replace( rightTagRegExp, "" );
        return textAfterSelection;
    }

    removeFormat( selectedText: string, textBeforeSelection: string, textAfterSelection: string ) {
        return this.removeFormatBeforeText(textBeforeSelection) + selectedText + this.removeFormatAfterText(textAfterSelection);
    }

    format( selectedText: string, textBeforeSelection: string, textAfterSelection: string ) {
        let replaceText = '';
        if( this.isHtmlTag ) {
            replaceText = '<span style="' + this.cssProperty + ': ' + this.cssValue + '">' + selectedText + '</span>';
        }
        else {
            replaceText = this.mdFormat + selectedText + this.mdFormat;
        }
        return textBeforeSelection + replaceText + textAfterSelection;
    }

    
}