import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DessertsPage } from './desserts';

@NgModule({
  declarations: [
    DessertsPage,
  ],
  imports: [
    IonicPageModule.forChild(DessertsPage),
  ],
})
export class DessertsPageModule {}
