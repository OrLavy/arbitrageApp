import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Arbitrage } from "../../common/models/arbitrage";
import { ArbitrageService } from "../../providers/arbitrage-service";

/**
 * Generated class for the HistoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-history-page',
  templateUrl: 'history-page.html',
})
export class HistoryPage {

  public pastGames : Arbitrage[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public arbitrageService : ArbitrageService) {
    this.pastGames = this.arbitrageService.getPastGames();
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
