import { DbService } from '../../providers/db-service';
import { Component, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Arbitrage } from "../models/arbitrage";
import {BehaviorSubject} from 'rxjs';
import { Site } from "../models/site";
import { Cordova } from "@ionic-native/core";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { UiService } from "../../providers/ui-service";
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
  constructor(private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams,
  private uiService : UiService, private dbService : DbService) {
    
  }

  set data(value) {
        // set the latest value for _data BehaviorSubject
        this._data.next(value);
  };

  openSite(site : Site){
    console.log('Url : ' + site.url);
    const browser = this.iab.create('https://ionicframework.com/');
  }

  save (arbitrage : Arbitrage){
    this.dbService.saveArbitrage(arbitrage);
  }

  report (arbitrage : Arbitrage){
    this.uiService.presentSimpleAlert('Arbitrage Reported', 'Thank you for your input');
  }

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
