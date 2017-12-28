webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/david/Programacion/Ionic2/ConstitucionEspanyola/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/david/Programacion/Ionic2/ConstitucionEspanyola/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.rows = Math.floor(this.platform.height() / 25);
    }
    AboutPage.prototype.ionViewDidLoad = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('inputTextArea'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], AboutPage.prototype, "inputTextArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('inputTextArea', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _b || Object)
    ], AboutPage.prototype, "inputTextAreaEl", void 0);
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/david/Programacion/Ionic2/ConstitucionEspanyola/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item>\n        <ion-textarea #inputTextArea [attr.rows]="rows" placeholder="Strat writing your markdown below..."></ion-textarea>\n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/david/Programacion/Ionic2/ConstitucionEspanyola/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _d || Object])
    ], AboutPage);
    return AboutPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/david/Programacion/Ionic2/ConstitucionEspanyola/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Programacion/Ionic2/ConstitucionEspanyola/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_selected_text_selected_text__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marked__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_markdown_utils_markdown_utils__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, selectedTextSvc, markdownUtilsSvc, platform) {
        this.navCtrl = navCtrl;
        this.selectedTextSvc = selectedTextSvc;
        this.markdownUtilsSvc = markdownUtilsSvc;
        this.platform = platform;
        this.toggleVal = false;
        this.plainText = '';
        this.content = '';
        this.showFormat = false;
        this.test = '';
        //this.taRows = Math.floor( (this.platform.height() - itemHeight) / 25);
        this.taRows = 27;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.calcTaHeight();
    };
    HomePage.prototype.calcTaHeight = function () {
        var itemEl = this.fixedContent.nativeElement;
        var formatBarEl = (this.formatBar ? this.formatBar.nativeElement : null);
        var listEl1 = this.nonFixedContent.nativeElement.parentElement;
        // Get the height of the fixed item
        var itemHeight = itemEl.offsetHeight;
        var formatBarHeight = (formatBarEl ? formatBarEl.offsetHeight : 0);
        // Set the margin top to the height of the fixed item
        if (listEl1) {
            var maxHeight = itemHeight;
            if (formatBarHeight > maxHeight) {
                maxHeight = formatBarHeight;
            }
            listEl1.style.top = maxHeight + 5 + 'px';
        }
    };
    HomePage.prototype.showFormatFn = function (event) {
        var _this = this;
        this.showFormat = event;
        setTimeout(function () {
            _this.calcTaHeight();
        }, 1);
    };
    HomePage.prototype.convert = function () {
        if (this.toggleVal && this.plainText) {
            this.content = __WEBPACK_IMPORTED_MODULE_3_marked___default()(this.plainText.toString());
        }
        else {
            this.content = '';
        }
    };
    HomePage.prototype.format = function (mdFormatId) {
        var textAreaSelectedTextObj = this.getTextAreaSelectedText();
        if (textAreaSelectedTextObj != null) {
            var selectedText = textAreaSelectedTextObj.selectedText;
            var textBeforeSelection = textAreaSelectedTextObj.textBeforeSelection;
            var textAfterSelection = textAreaSelectedTextObj.textAfterSelection;
            var mdFormat = this.markdownUtilsSvc.getMdFormatById(mdFormatId);
            this.plainText =
                (mdFormat
                    ? mdFormat.format(selectedText, textBeforeSelection, textAfterSelection)
                    : this.plainText);
        }
    };
    HomePage.prototype.removeFormat = function () {
        var textAreaSelectedTextObj = this.getTextAreaSelectedText();
        if (textAreaSelectedTextObj != null) {
            var selectedText = textAreaSelectedTextObj.selectedText;
            var textBeforeSelection = textAreaSelectedTextObj.textBeforeSelection;
            var textAfterSelection = textAreaSelectedTextObj.textAfterSelection;
            this.plainText =
                (this.getSelectedTextFormat(textBeforeSelection)
                    ? this.getSelectedTextFormat(textBeforeSelection).removeFormat(selectedText, textBeforeSelection, textAfterSelection)
                    : this.plainText);
        }
    };
    HomePage.prototype.getSelectedTextFormat = function (beforeSelectedText) {
        return this.markdownUtilsSvc.getTextAppliedMd(beforeSelectedText);
    };
    HomePage.prototype.getTextAreaSelectedText = function () {
        return this.selectedTextSvc.getTextAreaSelectedText(this.plainText);
    };
    HomePage.prototype.stringReverse = function (str) {
        return str.split("").reverse().join("");
    };
    HomePage.prototype.removeFormatBeforeText = function (textBeforeSelection) {
        var textBeforeSelectionReverse = this.stringReverse(textBeforeSelection);
        if (textBeforeSelectionReverse) {
            var leftTagRegExp = new RegExp(">(.*?)<");
            textBeforeSelectionReverse = textBeforeSelectionReverse.replace(leftTagRegExp, "");
            var textWithoutTag = this.stringReverse(textBeforeSelectionReverse);
            return textWithoutTag;
        }
        return "";
    };
    HomePage.prototype.removeFormatAfterText = function (textAfterSelection) {
        var rightTagRegExp = new RegExp("</(.*?)>");
        textAfterSelection = textAfterSelection.replace(rightTagRegExp, "");
        return textAfterSelection;
    };
    HomePage.prototype.getSelectedPosInStr = function (str, selected, iStart) {
        var strBefore = str.substr(0, iStart);
        var regExp = new RegExp(selected, "g");
        var countBefore = (strBefore.match(regExp) || []).length;
        return countBefore + 1;
    };
    HomePage.prototype.replaceStringByIndexes = function (origStr, startIndex, endIndex, newStr) {
        var a = origStr.substr(0, startIndex);
        var b = origStr.substr(startIndex + newStr.length);
        console.log(a);
        console.log(b);
        console.log(newStr);
        return a + newStr + b;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('inputTextArea'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "inputTextArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('item', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _b || Object)
    ], HomePage.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fixedContent'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _c || Object)
    ], HomePage.prototype, "fixedContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nonFixedContent'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _d || Object)
    ], HomePage.prototype, "nonFixedContent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('formatBar'),
        __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _e || Object)
    ], HomePage.prototype, "formatBar", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/david/Programacion/Ionic2/ConstitucionEspanyola/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n  <ion-toolbar *ngIf="showFormat">\n      <ion-title>Subheader</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid #fixedContent ion-fixed>\n        <ion-item>\n          <ion-label>Format</ion-label>\n          <ion-toggle color="secondary" [ngModel]="showFormat" (ngModelChange)="showFormatFn($event)"></ion-toggle>\n        </ion-item>\n        <ion-item>\n          <ion-label>Convert to Markdown</ion-label>\n          <ion-toggle color="secondary" [(ngModel)]="toggleVal" (ionChange)="convert()"></ion-toggle>\n        </ion-item>\n    </ion-grid>\n    <ion-grid class="format-bar" [hidden]="!showFormat" ion-fixed #formatBar>\n        <ion-row>\n            <ion-col col-9>\n                <ion-col col-auto><button ion-button color="light" (click)="format(\'b\')"><fa-icon name="bold"></fa-icon></button></ion-col>\n                <ion-col col-auto><button ion-button color="light" (click)="format(\'it\')"><fa-icon name="italic"></fa-icon></button></ion-col>\n                <ion-col col-auto><button ion-button color="light" (click)="format(\'h1\')">h1</button></ion-col>\n                <ion-col col-auto><button ion-button color="light" (click)="format(\'h2\')">h2</button></ion-col>\n                <ion-col col-auto><button class="color-red" ion-button color="light" (click)="format(\'color-red\')">T</button></ion-col>\n                <ion-col col-auto><button ion-button color="light" (click)="removeFormat()"><fa-icon name="ban"></fa-icon></button></ion-col>\n            </ion-col>\n            <ion-col col-3>\n                <button ion-button round color="dark" (click)="showFormatFn(false)" ><fa-icon name="times"></fa-icon></button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <div #nonFixedContent>\n        <ion-content class="md-show" [hidden]="!toggleVal">\n            <div [innerHtml]="content | safeHtml"></div>\n        </ion-content>\n        <ion-item [hidden]="toggleVal">\n          <ion-textarea id="inputTextArea" #inputTextArea [(ngModel)]="plainText" [attr.rows]="taRows" placeholder="Strat writing your markdown below..."></ion-textarea>\n        </ion-item>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/david/Programacion/Ionic2/ConstitucionEspanyola/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__providers_selected_text_selected_text__["a" /* SelectedTextProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_selected_text_selected_text__["a" /* SelectedTextProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__providers_markdown_utils_markdown_utils__["a" /* MarkdownUtilsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_markdown_utils_markdown_utils__["a" /* MarkdownUtilsProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */]) === "function" && _j || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedTextProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_selected_text_selected_text__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SelectedTextProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SelectedTextProvider = (function () {
    function SelectedTextProvider() {
    }
    SelectedTextProvider.prototype.getTextAreaSelectedText = function (text) {
        /*let ionTextArea = window.getSelection().baseNode || document.getSelection().baseNode;
        let ionTextAreaChildNodes = ionTextArea.childNodes;
        let textAreaChildNode;
  
        for( let i = 0; i < ionTextAreaChildNodes.length; i++ ) {
          if( ionTextAreaChildNodes.item(i).nodeName === 'TEXTAREA' ) {
            textAreaChildNode = ionTextAreaChildNodes.item(i);
            break;
          }
        }*/
        var textAreaChildNode;
        var ionTextArea = document.getElementById("inputTextArea");
        if (ionTextArea) {
            var textAreas = ionTextArea.getElementsByTagName("textarea");
            if (textAreas && textAreas.length > 0) {
                textAreaChildNode = textAreas.item(0);
                if (textAreaChildNode) {
                    var iSelectionStart = textAreaChildNode.selectionStart;
                    var iSelectionEnd = textAreaChildNode.selectionEnd;
                    var textAreaText = textAreaChildNode.value;
                    if (textAreaText
                        && (iSelectionStart != null && iSelectionStart != undefined)
                        && (iSelectionEnd != null && iSelectionEnd != undefined)) {
                        var textBeforeSelection = textAreaText.substring(0, iSelectionStart);
                        var textAfterSelection = textAreaText.substring(iSelectionEnd);
                        var selectedText = textAreaText.substring(iSelectionStart, iSelectionEnd);
                        var selectedTextObj = new __WEBPACK_IMPORTED_MODULE_0__models_selected_text_selected_text__["a" /* SelectedText */](textAreaText, selectedText, textBeforeSelection, textAfterSelection);
                        return selectedTextObj;
                    }
                }
            }
        }
        return null;
    };
    SelectedTextProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SelectedTextProvider);
    return SelectedTextProvider;
}());

//# sourceMappingURL=selected-text.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownUtilsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_markdown_format_markdown_format__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MarkdownUtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MarkdownUtilsProvider = (function () {
    function MarkdownUtilsProvider() {
        this.markdownFormats = [
            /*new MarkdownFormat( "h1", "# ", "Heading", "Heading", "#", "# (.*?)",
                                false, null, null, null, true ),*/
            new __WEBPACK_IMPORTED_MODULE_0__models_markdown_format_markdown_format__["a" /* MarkdownFormat */]("h2", "## ", "Heading h2", "Heading h2", "#", "\ #(?!#)", false, null, null, null, true),
            new __WEBPACK_IMPORTED_MODULE_0__models_markdown_format_markdown_format__["a" /* MarkdownFormat */]("h1", "# ", "Heading h1", "Heading h1", "#", "\ ##(?!#)", false, null, null, null, true),
            new __WEBPACK_IMPORTED_MODULE_0__models_markdown_format_markdown_format__["a" /* MarkdownFormat */]("b", "**", "Bold", "Bold", "*", "\\*\\*(.*?)"),
            new __WEBPACK_IMPORTED_MODULE_0__models_markdown_format_markdown_format__["a" /* MarkdownFormat */]("it", "*", "Italics", "Italics", "*", "\\*(.*?)"),
            new __WEBPACK_IMPORTED_MODULE_0__models_markdown_format_markdown_format__["a" /* MarkdownFormat */]("color-red", "", "Font color", "Font color", "red", ">(.*?)<", true, "</(.*?)>", "color", "red"),
            new __WEBPACK_IMPORTED_MODULE_0__models_markdown_format_markdown_format__["a" /* MarkdownFormat */]("color-blue", "", "Font color", "Font color", "red", ">(.*?)<", true, "</(.*?)>", "color", "blue")
        ];
    }
    MarkdownUtilsProvider.prototype.stringReverse = function (str) {
        return str.split("").reverse().join("");
    };
    MarkdownUtilsProvider.prototype.getTextAppliedMd = function (textBefore) {
        textBefore = this.stringReverse(textBefore);
        for (var _i = 0, _a = this.markdownFormats; _i < _a.length; _i++) {
            var mdFormat = _a[_i];
            /*if( mdFormat.isHtmlTag ) {
              textBefore = this.stringReverse( textBefore );
            }*/
            var i = textBefore.search(mdFormat.replaceBeforeTextRegExp);
            if (i === 0) {
                return mdFormat;
            }
            else if (mdFormat.isHtmlTag) {
                textBefore = this.stringReverse(textBefore);
            }
        }
    };
    MarkdownUtilsProvider.prototype.getMdFormatById = function (id) {
        for (var _i = 0, _a = this.markdownFormats; _i < _a.length; _i++) {
            var mdFormat = _a[_i];
            if (mdFormat.id === id) {
                return mdFormat;
            }
        }
        return null;
    };
    MarkdownUtilsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MarkdownUtilsProvider);
    return MarkdownUtilsProvider;
}());

//# sourceMappingURL=markdown-utils.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_fa_icon_fa_icon_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_safehtml_pipe_safehtml_pipe__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_selected_text_selected_text__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_markdown_utils_markdown_utils__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_safehtml_pipe_safehtml_pipe__["a" /* SafeHtmlPipe */],
                __WEBPACK_IMPORTED_MODULE_0__components_fa_icon_fa_icon_component__["a" /* FaIconComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__providers_selected_text_selected_text__["a" /* SelectedTextProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_markdown_utils_markdown_utils__["a" /* MarkdownUtilsProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaIconComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaIconComponent = (function (_super) {
    __extends(FaIconComponent, _super);
    function FaIconComponent(config, elementRef, renderer) {
        return _super.call(this, config, elementRef, renderer, "fa") || this;
    }
    Object.defineProperty(FaIconComponent.prototype, "fixedWidth", {
        set: function (fixedWidth) {
            this.setElementClass("fa-fw", this.isTrueProperty(fixedWidth));
        },
        enumerable: true,
        configurable: true
    });
    FaIconComponent.prototype.ngOnChanges = function (changes) {
        if (changes.name) {
            this.unsetPrevAndSetCurrentClass(changes.name);
        }
        if (changes.size) {
            this.unsetPrevAndSetCurrentClass(changes.size);
        }
    };
    FaIconComponent.prototype.isTrueProperty = function (val) {
        if (typeof val === "string") {
            val = val.toLowerCase().trim();
            return (val === "true" || val === "on" || val === "");
        }
        return !!val;
    };
    ;
    FaIconComponent.prototype.unsetPrevAndSetCurrentClass = function (change) {
        this.setElementClass("fa-" + change.previousValue, false);
        this.setElementClass("fa-" + change.currentValue, true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FaIconComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FaIconComponent.prototype, "size", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("fixed-width"),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], FaIconComponent.prototype, "fixedWidth", null);
    FaIconComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "fa-icon",
            template: "",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], FaIconComponent);
    return FaIconComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Ion */]));

//# sourceMappingURL=fa-icon.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/david/Programacion/Ionic2/ConstitucionEspanyola/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/david/Programacion/Ionic2/ConstitucionEspanyola/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedText; });
var SelectedText = (function () {
    function SelectedText(fullText, selectedText, textBeforeSelection, textAfterSelection) {
        this.fullText = fullText;
        this.selectedText = selectedText;
        this.textBeforeSelection = textBeforeSelection;
        this.textAfterSelection = textAfterSelection;
    }
    return SelectedText;
}());

//# sourceMappingURL=selected-text.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkdownFormat; });
var MarkdownFormat = (function () {
    function MarkdownFormat(id, mdFormat, name, description, symbol, replaceBeforeTextRegExp, isHtmlTag, replaceAfterTextRegExp, cssProperty, cssValue, applyOnlyBefore) {
        this.isHtmlTag = false;
        this.applyOnlyBefore = false;
        this.id = id;
        this.mdFormat = mdFormat;
        this.name = name;
        this.description = description;
        this.symbol = symbol;
        this.isHtmlTag = isHtmlTag;
        this.replaceBeforeTextRegExp = new RegExp(replaceBeforeTextRegExp);
        var _replaceAfterTextRegExp = replaceAfterTextRegExp;
        if (!replaceAfterTextRegExp) {
            _replaceAfterTextRegExp = replaceBeforeTextRegExp;
        }
        this.replaceAfterTextRegExp = new RegExp(_replaceAfterTextRegExp);
        this.cssProperty = cssProperty;
        this.cssValue = cssValue;
        this.applyOnlyBefore = applyOnlyBefore;
    }
    MarkdownFormat.prototype.stringReverse = function (str) {
        return str.split("").reverse().join("");
    };
    MarkdownFormat.prototype.removeFormatBeforeText = function (textBeforeSelection) {
        var textBeforeSelectionReverse = this.stringReverse(textBeforeSelection);
        if (textBeforeSelectionReverse) {
            textBeforeSelectionReverse = textBeforeSelectionReverse.replace(this.replaceBeforeTextRegExp, "");
            var textWithoutTag = this.stringReverse(textBeforeSelectionReverse);
            return textWithoutTag;
        }
        return "";
    };
    MarkdownFormat.prototype.removeFormatAfterText = function (textAfterSelection) {
        var rightTagRegExp = new RegExp(this.replaceAfterTextRegExp);
        textAfterSelection = textAfterSelection.replace(rightTagRegExp, "");
        return textAfterSelection;
    };
    MarkdownFormat.prototype.removeFormat = function (selectedText, textBeforeSelection, textAfterSelection) {
        return this.removeFormatBeforeText(textBeforeSelection) + selectedText + this.removeFormatAfterText(textAfterSelection);
    };
    MarkdownFormat.prototype.format = function (selectedText, textBeforeSelection, textAfterSelection) {
        var replaceText = '';
        if (this.isHtmlTag) {
            replaceText = '<span style="' + this.cssProperty + ': ' + this.cssValue + '">' + selectedText + '</span>';
        }
        else {
            replaceText = this.mdFormat + selectedText + (!this.applyOnlyBefore ? this.mdFormat : "");
        }
        return textBeforeSelection + replaceText + textAfterSelection;
    };
    return MarkdownFormat;
}());

//# sourceMappingURL=markdown-format.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'safeHtml' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());

//# sourceMappingURL=safehtml-pipe.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map