import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loading, LoadingController, Alert, AlertController } from 'ionic-angular'

import firebase from 'firebase'
import { ProfileProvider } from '../../providers/profile/profile'
import { AuthProvider } from '../../providers/auth/auth'

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  currentUser
  loading:Loading

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public profileProvider:ProfileProvider,
    public authProvider:AuthProvider,
    public loadCtrl:LoadingController,
    public alertCtrl: AlertController
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.profileProvider.getUserProfile().on("value",userProfileSnapshot=>{
      this.currentUser=userProfileSnapshot.val();
      console.log(this.currentUser)
      this.loading.dismiss();
    })
    this.loading = this.loadCtrl.create();
    this.loading.present();
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
    this.navCtrl.setRoot("LoginPage");
    });
  }

  updateName(){
    const alert: Alert = this.alertCtrl.create({
      message: "Your first name & last name",
      inputs: [
        {name:"firstName",
        placeholder:"Your first name",
        value:this.currentUser.firstName
        },
        {name:"lastName",
        value: this.currentUser.lastName
        }
      ],
      buttons: [
        {text: "Cancel"},
        {text: "Save", handler:data=>{this.profileProvider.updateName(data.firstName, data.lastName)}}
      ]
    })
    alert.present();
  }
  

}
