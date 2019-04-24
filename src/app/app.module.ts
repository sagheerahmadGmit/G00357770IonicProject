import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable } from 'rxjs';

import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecipesProvider } from '../providers/recipes/recipes';
//import { GoogleMapsComponent } from '../components/google-maps/google-maps';
// import { DessertsPage } from '../pages/desserts/desserts';
// import { MenuPage } from '../pages/menu/menu';
// import { AboutUsPage } from '../pages/about-us/about-us';

@NgModule({
  declarations: [
    MyApp,
    HomePage
    // DessertsPage,
    // MenuPage,
    // AboutUsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
    // DessertsPage,
    // MenuPage,
    // AboutUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipesProvider
  ]
})
export class AppModule {}
