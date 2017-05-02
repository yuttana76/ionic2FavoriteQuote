import { Library } from './../library/library';
import { Component } from '@angular/core';
import { Favorites } from '../favorites/favorites';

@Component({
    selector: 'page-tabs',
    template: `
<ion-tabs selectedIndex="1">
    <ion-tab [root]="FavoritesPage" tabTitle="Favorites" tabIcon="star" ></ion-tab>
    <ion-tab [root]="LibraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
</ion-tabs>
`
})
export class TabPage {

    FavoritesPage = Favorites;
    LibraryPage = Library;

}