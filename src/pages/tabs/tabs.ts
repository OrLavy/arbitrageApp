import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings'
import { HistoryPage } from '../history-page/history-page'
import { ArbitragePage } from '../arbitrage-page/arbitrage-page'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ArbitragePage;
  tab2Root = HistoryPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
