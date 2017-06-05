import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArbitrageCard } from './arbitrage-card';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { UiService } from "../../providers/ui-service";
import { DbService } from "../../providers/db-service";

@NgModule({
  declarations: [
    ArbitrageCard,
  ],
  imports: [
    IonicPageModule.forChild(ArbitrageCard),
  ],
  providers :[
    InAppBrowser,
    UiService,
    DbService
  ],
  exports: [
    ArbitrageCard
  ]
})
export class ArbitrageCardModule {}
