import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

 // Decalare variables
  lat: any;
  long: any;

  hide: boolean = true;

  //add location plugin to parameters
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  //go back home
  homePage()
  {
    this.navCtrl.pop();
  }

  // get the co-ordinates from the location plugin
  getLocation()
  {
    //if message is hidden then show else hide them again
    if(this.hide == true)
    {
      this.hide = false;
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.lat = data.coords.latitude
      this.long = data.coords.longitude
      });
    }
    else
    {
      this.hide = true;//hide the message again
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');

  }

}
