import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArbitrageCard } from './arbitrage-card';

@NgModule({
  declarations: [
    ArbitrageCard,
  ],
  imports: [
    IonicPageModule.forChild(ArbitrageCard),
  ],
  exports: [
    ArbitrageCard
  ]
})
export class ArbitrageCardModule {}
