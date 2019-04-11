import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
