//import neccessary classes
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

  //Declare variables
  mainCourse: any;
  dessert: any;
  drink: any;

  dessertCost: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad CheckoutPage');

    //Get the information from local storage and save it to the local variables
     this.mainCourse = JSON.parse(localStorage.getItem('order'));
     this.dessert = JSON.parse(localStorage.getItem('dessert'));
     this.drink = JSON.parse(localStorage.getItem('drink'));
  }

  //go to register and login page
  payPage()
  {
    this.navCtrl.push('RegisterPage');
  }

  //go to Home page
  homePage()
  {
    this.navCtrl.pop();
    this.navCtrl.pop();
    this.navCtrl.pop();
    this.navCtrl.pop();
  }

}
