//import neccessary classes
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu'

/**
 * Generated class for the DessertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-desserts',
  templateUrl: 'desserts.html',
})
export class DessertsPage {
//declare variables
  dessert: any;
  public dessertPageCost: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //go to the next page
  openDrinksPage()
  {
    this.navCtrl.push('DrinksPage');
  }

  //Depending on the dessert the user chooses, save it to localstorage
  dessert1()
  {
    localStorage.dessert = JSON.stringify("Rocky Road Brownie");
    this.dessertPageCost = 5.99;
  }//dessert 1

  dessert2()
  {
    localStorage.dessert = JSON.stringify("Fluffy Fruit Cake");
    this.dessertPageCost = 4.99;
  }//dessert 2

  dessert3()
  {
    localStorage.dessert = JSON.stringify("White Chocolate Cheesecake");
    this.dessertPageCost = 5.99;
  }//dessert 3

  dessert4()
  {
    localStorage.dessert = JSON.stringify("Fruit Dessert Pizza");
    this.dessertPageCost = 7.99;
  }//dessert 4

  goBack()
  {
    this.navCtrl.pop()
  }

}
