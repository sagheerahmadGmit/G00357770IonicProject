import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//declaring a global variable
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapRef: ElementRef;

  //declaring a local variable
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //run the showMap function
  ionViewDidLoad()
  {
    this.showMap();
    //console.log(this.mapRef);
  }

  //get the location of the following co-ordinates and output them to the map
  showMap()
  {
    //location lat long
    const location = new google.maps.LatLng(53.2775,-9.0107);

    //different map options
    const options = {
      center: location,
      zoom: 15,
      mapTypeId: 'hybrid'
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);

    //calling the addmarker function
    this.addMarker(location, this.map);

  }

  //add a marker to the same co-ordinates mentioned earlier
  addMarker(position, map)
  {
    return new google.maps.Marker({
      position,
      map
    })
  }

  goBack()
  {
    this.navCtrl.pop();
  }

}
