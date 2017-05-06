import { Quote } from './../quote/quote';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

    ngOnInit(): void {
      console.log('ngOnInit >' + this.navParams.data);
      this.quoteGroup = this.navParams.data;
    }

  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(private navParams: NavParams) { }

  // ionViewDidLoad() {
  //   // console.log('ionViewDidLoad >' + this.navParams.data);
  //   this.quoteGroup = this.navParams.data;
  //   // Add elvis operator(?) in template to use this approcah
  // }

}
