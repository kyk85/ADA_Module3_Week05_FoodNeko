import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

/**
 * Generated class for the RestaurantDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant-detail',
  templateUrl: 'restaurant-detail.html',
})
export class RestaurantDetailPage {

  public currentRestaurant:any={}

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public restaurantProv:RestaurantProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RestaurantDetailPage');
    this.restaurantProv.getRestaurantDetail(this.navParams.get("restId"))
    .on("value", restaurantSnapshot => {
      this.currentRestaurant = restaurantSnapshot.val();
      this.currentRestaurant.id = restaurantSnapshot.key;
    })
  }

  goToAddMenuItem(restId){
    this.navCtrl.push("MenuCreatePage", {restId:restId})
  }

}
