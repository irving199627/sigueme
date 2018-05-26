import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { HomeOrtPage } from '../home-ort/home-ort';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any;
  tab2: any;

  constructor() {
    this.tab1 = HomePage;
    this.tab2 = HomeOrtPage;
  }

}
