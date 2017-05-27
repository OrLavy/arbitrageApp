import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArbitragePage } from './arbitrage-page';
import { ArbitrageListModule } from "../../common/arbitrage-list/arbitrage-list.module";
import { ArbitrageList } from "../../common/arbitrage-list/arbitrage-list";

@NgModule({
  declarations: [
    ArbitragePage
  ],
  imports: [
    ArbitrageListModule,
    IonicPageModule.forChild(ArbitragePage),
  ],
  exports: [
    ArbitragePage
  ]
})
export class ArbitragePageModule { }
