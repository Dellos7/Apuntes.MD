
export class SelectedText { 

    fullText: string;
    selectedText: string;
    textBeforeSelection: string;
    textAfterSelection: string;

    constructor( fullText: string, selectedText: string,
                    textBeforeSelection: string, textAfterSelection: string ) {
        this.fullText = fullText;
        this.selectedText = selectedText;
        this.textBeforeSelection = textBeforeSelection;
        this.textAfterSelection = textAfterSelection;
    }

}