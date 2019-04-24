//import neccessary classesS
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DessertsPage} from '../desserts/desserts'
import { stringify } from '@angular/core/src/util';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  //declare local variables
  order: string;
  mainCourseCost: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  //go to desserts page
  dessertsPage()
  {
    this.navCtrl.push('DessertsPage');
  }

  //depending on the users choice, run one function and save information to local storage
  mainOrder1()
  {
    localStorage.order = JSON.stringify("Breakfast Burger");
  }//main course 1

  mainOrder2()
  {
    localStorage.order = JSON.stringify("Seared Steak with Fries");
  }//main course 2

  mainOrder3()
  {
    localStorage.order = JSON.stringify("Scotch sirloin steak");
  }//main course 3

  mainOrder4()
  {
    localStorage.order = JSON.stringify("Vegetarian Bean Burger");
  }//main course 4

  mainOrder5()
  {
    localStorage.order = JSON.stringify("Pasta with Meatballs");
  }//main course 5

  mainOrder6()
  {
    localStorage.order = JSON.stringify("Chicken fillet Burger Meal");
  }//main course 6

  mainOrder7()
  {
    localStorage.order = JSON.stringify("Double Quarter Pounder Burger");
  }//main course 7

  goBack()
  {
    this.navCtrl.pop()
  }

}
