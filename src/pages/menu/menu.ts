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

  order: string;
  mainCourseCost: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  dessertsPage()
  {
    this.navCtrl.push('DessertsPage');
  }

  mainOrder1()
  {
    localStorage.order = JSON.stringify("Breakfast Burger");
  }

  mainOrder2()
  {
    localStorage.order = JSON.stringify("Seared Steak with Fries");
  }

  mainOrder3()
  {
    localStorage.order = JSON.stringify("Scotch sirloin steak");
  }

  mainOrder4()
  {
    localStorage.order = JSON.stringify("Vegetarian Bean Burger");
  }

  mainOrder5()
  {
    localStorage.order = JSON.stringify("Pasta with Meatballs");
  }

  mainOrder6()
  {
    localStorage.order = JSON.stringify("Chicken fillet Burger Meal");
  }

  mainOrder7()
  {
    localStorage.order = JSON.stringify("Double Quarter Pounder Burger");
  }

}
