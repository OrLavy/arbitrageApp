import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Arbitrage } from "../../common/models/arbitrage";
import { ArbitrageService } from "../../providers/arbitrage-service";

/**
 * Generated class for the ArbitragePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-arbitrage-page',
  templateUrl: 'arbitrage-page.html',
})
export class ArbitragePage {

  public futureGames : Arbitrage[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public arbitrageService : ArbitrageService) {
    this.futureGames = this.arbitrageService.getFutureGames();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArbitragePage');
  }

}
