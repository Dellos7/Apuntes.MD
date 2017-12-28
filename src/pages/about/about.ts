import { ElementRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('inputTextArea') inputTextArea :ElementRef;
  @ViewChild('inputTextArea', {read: ElementRef}) inputTextAreaEl:ElementRef;

  rows: number;

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.rows = Math.floor(this.platform.height() / 25);
  }

  ionViewDidLoad() {
    
  }

}
