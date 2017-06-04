import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PAST_GAMES, FUTURE_GAMES } from './games';
import { Arbitrage } from "../common/models/arbitrage";

/*
  Generated class for the ArbitrageService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ArbitrageService {

  constructor() {
    console.log('Hello ArbitrageService Provider');
  }

  public getPastGames(): Arbitrage[] {
    return PAST_GAMES;
  }

  public getFutureGames(): Promise<Arbitrage[]> {
    return Promise.resolve(FUTURE_GAMES);
  }

}
