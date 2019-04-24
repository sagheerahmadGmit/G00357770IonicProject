//import neccessary classes
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

  //declare variables
  drink: any;
  cost: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinksPage');
  }

  //open the checkout page
  openCheckout()
  {
    this.navCtrl.push('CheckoutPage');
  }

  //Depending on the drink the user chooses, save it to localstorage
  drink1()
  {
    localStorage.drink = JSON.stringify("Bottle of Coke");
  }//drink 1

  drink2()
  {
    localStorage.drink = JSON.stringify("Bottle of Fanta");
  }//drink 2

  drink3()
  {
    localStorage.drink = JSON.stringify("Bottle of Irn Bru");
  }//drink 3

  drink4()
  {
    localStorage.drink = JSON.stringify("Bottle of Sprite");
  }//drink 4

  drink5()
  {
    localStorage.drink = JSON.stringify("Bottle of Red Wine");
  }//drink 5

  drink6()
  {
    localStorage.drink = JSON.stringify("Bottle of White Wine");
  }//drink 6

  drink7()
  {
    localStorage.drink = JSON.stringify("Bottle of Mineral Water");
  }//drink 7

  drink8()
  {
    localStorage.drink = JSON.stringify("Jug of Tap Water");
  }//drink 8

  goBack()
  {
    this.navCtrl.pop()
  }

}
