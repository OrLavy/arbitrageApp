import { Component, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Arbitrage } from "../models/arbitrage";
import {BehaviorSubject} from 'rxjs';

/**
 * Generated class for the ArbitrageCard page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'arbitrage-card',
  inputs : ['data'],
  templateUrl: 'arbitrage-card.html',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ArbitrageCard {

  private _data = new BehaviorSubject<Arbitrage>(null);


  public arbitrage : Arbitrage;
  public name : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  set data(value) {
        // set the latest value for _data BehaviorSubject
        this._data.next(value);
  };

  ngAfterViewInit() {
    console.log('ionViewDidLoad ArbitrageCard');
  }

  ngOnInit(){
    console.log("Init");

    this._data.subscribe(value => {
      this.arbitrage = value;
      console.log(this.arbitrage);
    });
  }
}
