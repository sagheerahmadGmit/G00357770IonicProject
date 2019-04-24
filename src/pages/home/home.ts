import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  //Open up the main courses
  openMainPage()
  {
    this.navCtrl.push('MenuPage');
  }

  //open up the about us page
  openAboutUsPage()
  {
    this.navCtrl.push('AboutUsPage');
  }

  //open the location page, contact us page
  openLocationPage()
  {
    this.navCtrl.push('MapPage');
  }

}
