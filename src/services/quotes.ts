import { Quote } from './../data/quote.interface';

export class QuoteService{
    private favoriteQuotes:Quote[]=[];

    addQuoteToFavoriates(quote:Quote){
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorite(quote:Quote){
        const position = this.favoriteQuotes.findIndex((quoteEl:Quote)=>{
            return quoteEl.id==quote.id;
        });

        this.favoriteQuotes.splice(position,1);
    }

    getFavoriateQuote(){
        return this.favoriteQuotes.splice;
    }
}