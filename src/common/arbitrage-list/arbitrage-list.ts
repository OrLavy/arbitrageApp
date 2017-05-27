import { Component , Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Arbitrage } from "../models/arbitrage";

/**
 * Generated class for the ArbitrageList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'arbitrage-list',
  inputs : ['arbitrages'],
  templateUrl: 'arbitrage-list.html',
})
export class ArbitrageList {

  public arbitrages : Arbitrage[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngAfterViewInit() {
    console.log('ionViewDidLoad ArbitrageList');
  }

}
