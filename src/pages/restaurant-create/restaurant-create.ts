import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

/**
 * Generated class for the RestaurantCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant-create',
  templateUrl: 'restaurant-create.html',
})
export class RestaurantCreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public restaurantProv: RestaurantProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantCreatePage');
  }

  createRestaurant(restaurantName:string,
  restaurantDescription:string,
  restaurantAddress:string,
  restaurantPhone:string){
    this.restaurantProv.createRestaurant(restaurantName,restaurantDescription,restaurantAddress,restaurantPhone)
    .then(newRestaurant =>{
      this.navCtrl.pop();
    })
  }

}
