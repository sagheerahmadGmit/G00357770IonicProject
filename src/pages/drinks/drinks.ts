import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DrinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html',
})
export class DrinksPage {

  drink: any;
  cost: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinksPage');
  }

  openCheckout()
  {
    this.navCtrl.push('CheckoutPage');
  }

  drink1()
  {
    localStorage.drink = JSON.stringify("Bottle of Coke");
  }

  drink2()
  {
    localStorage.drink = JSON.stringify("Bottle of Fanta");
  }

  drink3()
  {
    localStorage.drink = JSON.stringify("Bottle of Irn Bru");
  }

  drink4()
  {
    localStorage.drink = JSON.stringify("Bottle of Sprite");
  }

  drink5()
  {
    localStorage.drink = JSON.stringify("Bottle of Red Wine");
  }

  drink6()
  {
    localStorage.drink = JSON.stringify("Bottle of White Wine");
  }

  drink7()
  {
    localStorage.drink = JSON.stringify("Bottle of Mineral Water");
  }

  drink8()
  {
    localStorage.drink = JSON.stringify("Jug of Tap Water");
  }

}
