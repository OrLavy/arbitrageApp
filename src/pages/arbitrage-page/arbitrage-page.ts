import { Component , ChangeDetectionStrategy} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Arbitrage } from "../../common/models/arbitrage";
import { ArbitrageService } from "../../providers/arbitrage-service";
import * as moment from 'moment';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArbitragePage {

  private arbitrages : Arbitrage[];
  public todayGamesExist = false;
  public todayGames : Arbitrage[];
  public shortTermGames : Arbitrage[];
  public longTermGames : Arbitrage[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public arbitrageService : ArbitrageService) {
    this.arbitrageService.getFutureGames().then(arbitrages => this.divideIntoTimeframes(arbitrages));    
  }

  divideIntoTimeframes (arbitrages : Arbitrage[]){
      let today = moment(new Date());
      this.todayGames = arbitrages;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArbitragePage');
  }

}
