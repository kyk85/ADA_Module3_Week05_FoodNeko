import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantCreatePage } from './restaurant-create';

@NgModule({
  declarations: [
    RestaurantCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantCreatePage),
  ],
})
export class RestaurantCreatePageModule {}
