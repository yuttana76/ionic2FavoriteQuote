import { Quote } from './../data/quote.interface';

export class QuoteService{
    private favoriteQuotes:Quote[]=[];

    addQuoteToFavoriates(quote:Quote){
        this.favoriteQuotes.push(quote);
        // console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorite(quote:Quote){
        const position = this.favoriteQuotes.findIndex((quoteEl:Quote)=>{
            return quoteEl.id==quote.id;
        });
        this.favoriteQuotes.splice(position,1);
    }

    getFavoriateQuotes(){
        return this.favoriteQuotes.slice();
    }

    isFavorites(quote:Quote){
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id ==quote.id;
        });
    }
}