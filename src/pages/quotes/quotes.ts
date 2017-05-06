import { AlertController } from 'ionic-angular';
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

  constructor(private navParams: NavParams, private alertCtrl: AlertController) { }

  // ionViewDidLoad() {
  //   // console.log('ionViewDidLoad >' + this.navParams.data);
  //   this.quoteGroup = this.navParams.data;
  //   // Add elvis operator(?) in template to use this approcah
  // }

  onAddToFavorite(selectedQuote: Quote) {

    const alert = this.alertCtrl.create({
      title: 'Add quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons:[
        {
          text:'Yes, go ahead',
          handler:()=>{
            console.log('Yes (Clicked)');
          }
        },{
        text:'No, I changed my mind!',
          handler:()=>{
            console.log('Cancelled');
          }
        }
      ]
    });

    alert.present();
  }

}
