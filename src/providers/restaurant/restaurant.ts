import { Injectable } from '@angular/core';
import firebase from 'firebase'

/*
  Generated class for the RestaurantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantProvider {

  public restaurantListRef: firebase.database.Reference

  constructor() {
    console.log('Hello RestaurantProvider Provider');
    firebase.auth().onAuthStateChanged(user=>{
      if(user) {
        this.restaurantListRef = firebase.database().ref(`/restaurants`)
      }
    })
  }

  createRestaurant(
    restaurantName:string, 
    restaurantDesc:string,
    restaurantAddress:string,
    restaurantPhone:string):
      firebase.database.ThenableReference{
        return this.restaurantListRef.push({
          name:restaurantName,
          description:restaurantDesc,
          address:restaurantAddress,
          phone:restaurantPhone
        })
      }

  getRestaurantList(): firebase.database.Reference {
    return this.restaurantListRef;
  }

  getRestaurantDetail(restId:string): firebase.database.Reference {
    return this.restaurantListRef.child(restId);
  }

  addMenuItem(itemName:string,restId:string,itemDesc:string,itemPrice:string):PromiseLike<any>{
    return this.restaurantListRef.child(`${restId}/menu`).push({itemName:itemName, itemDesc:itemDesc, itemPrice:itemPrice})
  }
}
