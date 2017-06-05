import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Arbitrage } from "../common/models/arbitrage";
import { NativeStorage } from "@ionic-native/native-storage";

/*
  Generated class for the DbService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DbService {
  readonly ARBITRAGES_KEY : string = 'ARBITRAGES';
  private arbitrages : Arbitrage[] = [];

  constructor(private nativeStorage : NativeStorage) {
   // this.refreshArbitrages();
  }

  public saveArbitrage(arbitrage : Arbitrage){
    if (this.checkIfArbitrageExist(arbitrage)){
      // Do nothing, already saved
    } else {
      this.arbitrages.push(arbitrage);
      this.nativeStorage.setItem(this.ARBITRAGES_KEY, this.arbitrages)
      .then(() => {
        this.refreshArbitrages();
      });
    }
  }

  public unSaveArbitrage(arbitrage : Arbitrage){
    
  }

  private checkIfArbitrageExist(checkedArbitrage : Arbitrage){
    return this.arbitrages.some(arbitrage => checkedArbitrage.gameId === arbitrage.gameId);
  }

  private refreshArbitrages(){
    this.nativeStorage.getItem(this.ARBITRAGES_KEY)
    .then(arbitrages => {
      console.log('received arbitrages : ');
      console.log(arbitrages);
      this.arbitrages = arbitrages
    })
  }

}
