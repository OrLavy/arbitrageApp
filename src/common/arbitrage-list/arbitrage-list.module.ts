import {ArbitrageCardModule} from '../arbitrage-card/arbitrage-card.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArbitrageList } from './arbitrage-list';

@NgModule({
  declarations: [
    ArbitrageList,
  ],
  imports: [
    ArbitrageCardModule,
    IonicPageModule.forChild(ArbitrageList),
  ],
  exports: [
    ArbitrageList
  ]
})
export class ArbitrageListModule {}
