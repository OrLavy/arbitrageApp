import {HistoryPageModule} from '../pages/history-page/history-page.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ArbitragePage } from '../pages/arbitrage-page/arbitrage-page';
import { HistoryPage } from '../pages/history-page/history-page';
import { SettingsPage } from '../pages/settings/settings';
import { NativeStorage } from '@ionic-native/native-storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ArbitragePageModule } from "../pages/arbitrage-page/arbitrage-page.module";
import { ArbitrageService } from "../providers/arbitrage-service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    SettingsPage,
    
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    ArbitragePageModule,
    HistoryPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ArbitragePage,
    HistoryPage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    ArbitrageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
