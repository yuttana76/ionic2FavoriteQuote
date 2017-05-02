import { TabPage } from './../pages/tabs/tabs';
import { Settings } from './../pages/settings/settings';
import { Quotes } from './../pages/quotes/quotes';
import { Quote } from './../pages/quote/quote';
import { Library } from './../pages/library/library';
import { Favorites } from './../pages/favorites/favorites';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    Favorites,
    Library,
    Quote,
    Quotes,
    Settings,
    TabPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Favorites,
    Library,
    Quote,
    Quotes,
    Settings,
    TabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
