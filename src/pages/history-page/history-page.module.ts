import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoryPage } from './history-page';
import { ArbitrageListModule } from "../../common/arbitrage-list/arbitrage-list.module";
import { ArbitrageList } from "../../common/arbitrage-list/arbitrage-list";

@NgModule({
  declarations: [
    HistoryPage,
  ],
  imports: [
    ArbitrageListModule,
    IonicPageModule.forChild(HistoryPage),
  ],
  exports: [
    HistoryPage
  ]
})
export class HistoryPageModule {}
