import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openMenuPage()
  {
    this.navCtrl.push('MenuPage');
  }

  openAboutUsPage()
  {
    this.navCtrl.push('AboutUsPage');
  }

}
