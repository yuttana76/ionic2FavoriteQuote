import { QuotePage } from './../quote/quote';
import { Quote } from '../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { QuoteService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class Favorites {

  quotes: Quote[];

  constructor(private quoteService: QuoteService, private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriateQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.onRemoveFromFavoriate(quote);
      }
    });
  }

  onRemoveFromFavoriate(quote: Quote) {
    this.quoteService.removeQuoteFromFavorite(quote);
    const position = this.quotes.findIndex((quoteEL: Quote) => {
      return quoteEL.id == quote.id
    });
    this.quotes.splice(position, 1);
  }
}
