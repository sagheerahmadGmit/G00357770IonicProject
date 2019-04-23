import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DessertsPage} from '../desserts/desserts';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  mainCourse: any;
  dessert: any;
  drink: any;

  dessertCost: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CheckoutPage');
     this.mainCourse = JSON.parse(localStorage.getItem('order'));
     this.dessert = JSON.parse(localStorage.getItem('dessert'));
     this.drink = JSON.parse(localStorage.getItem('drink'));
  }

  homePage()
  {
    this.navCtrl.pop();
    this.navCtrl.pop();
    this.navCtrl.pop();
    this.navCtrl.pop();
  }

}
