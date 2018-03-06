import { Injectable } from '@angular/core';
import { Alert, AlertController } from 'ionic-angular'
import firebase from 'firebase'

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public alertCtrl:AlertController) {
    console.log('Hello AuthProvider Provider');
  }

  loginUser(email:string, password:string):Promise<any>{
    return firebase.auth().signInWithEmailAndPassword(email,password)
    .catch(error=>{
      //console.log(error)
      return error
    })
  }

  logoutUser():Promise<void> {
    return firebase.auth().signOut();
  }

  registerUser(email:string,
    password:string,
    displayName:string,
    firstName:string,
    lastName:string,
    address:string,
    phoneNumber:string):Promise<any>{
    return firebase.auth().createUserWithEmailAndPassword(email,password).then(newUser=>{
      firebase.database().ref(`/userProfile/${newUser.uid}/userName`).set(email);
      firebase.database().ref(`/userProfile/${newUser.uid}/displayName`).set(displayName);
      firebase.database().ref(`/userProfile/${newUser.uid}/firstName`).set(firstName);
      firebase.database().ref(`/userProfile/${newUser.uid}/lastName`).set(lastName);
      firebase.database().ref(`/userProfile/${newUser.uid}/address`).set(address);
      firebase.database().ref(`/userProfile/${newUser.uid}/phoneNumber`).set(phoneNumber);

    
    })

  }



}
