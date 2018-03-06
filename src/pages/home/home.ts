import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Alert, AlertController, Loading, LoadingController } from 'ionic-angular';

//import { RestaurantCreatePage } from '../../pages/restaurant-create/restaurant-create';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';

import firebase from 'firebase'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public restaurantList:Array<any>
  loading:Loading

  constructor(public navCtrl: NavController,
  public alertCtrl:AlertController,
  public loadCtrl:LoadingController,
  public restaurantProv: RestaurantProvider
  ) {

  }

  goToCreate(){
    this.navCtrl.push("RestaurantCreatePage")
  }

  goToDetail(restId){
    this.navCtrl.push("RestaurantDetailPage", {restId: restId})
  }

  ionViewDidLoad(){
    this.restaurantProv.getRestaurantList().on("value", restaurantListSnapshot =>{
      this.restaurantList=[];
      restaurantListSnapshot.forEach(snap => {
        this.restaurantList.push({
          id: snap.key,
          name: snap.val().name,
          description: snap.val().description,
          address: snap.val().address,
          phone: snap.val().phone
        })
        this.loading.dismiss()
        return false;
      })

    })
    this.loading = this.loadCtrl.create();
    this.loading.present();
  }
 

}
