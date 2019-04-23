import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  openMainPage()
  {
    this.navCtrl.push('MenuPage');
  }

  openAboutUsPage()
  {
    this.navCtrl.push('AboutUsPage');
  }

  openRecipePage()
  {
    this.navCtrl.push('RecipesPage');
  }

}
