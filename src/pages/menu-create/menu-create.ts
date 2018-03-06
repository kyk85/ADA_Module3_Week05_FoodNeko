import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestaurantProvider } from '../../providers/restaurant/restaurant';

/**
 * Generated class for the MenuCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-create',
  templateUrl: 'menu-create.html',
})
export class MenuCreatePage {

  id:string=""

  constructor(public navCtrl: NavController, public navParams: NavParams, public restaurantProv:RestaurantProvider) {
  this.id=this.navParams.get("restId")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuCreatePage');
  }

  addMenuItem(itemName,itemDesc,itemPrice){
    this.restaurantProv.addMenuItem(itemName,this.id,itemDesc,itemPrice).then(newMenuItem=>{
      this.navCtrl.pop();
    })
  }

}
