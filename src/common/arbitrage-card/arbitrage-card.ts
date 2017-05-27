import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Arbitrage } from "../models/arbitrage";

/**
 * Generated class for the ArbitrageCard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'arbitrage-card',
  inputs : ['arbitrage'],
  templateUrl: 'arbitrage-card.html',
})
export class ArbitrageCard {

  public arbitrage : Arbitrage;
  public name : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ngAfterViewInit() {
    console.log('ionViewDidLoad ArbitrageCard');
    console.log(this.arbitrage);
  }

}
