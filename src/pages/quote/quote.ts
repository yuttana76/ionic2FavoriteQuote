import { ViewController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})

export class QuotePage {

  constructor(private viewCtrl: ViewController) { }

  onClose() {
    this.viewCtrl.dismiss();
  }

}
