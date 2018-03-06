import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Alert, AlertController, Loading, LoadingController } from 'ionic-angular'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import firebase from 'firebase'
import { AuthProvider } from '../../providers/auth/auth';
import { ProfileProvider } from '../../providers/profile/profile';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  registerForm:FormGroup
  loading:Loading

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadCtrl: LoadingController,
    public authProv: AuthProvider,
    public profileProv: ProfileProvider,
    formBuilder:FormBuilder) {

      this.registerForm = formBuilder.group({
        email:[''],
        displayName:[''],
        password:[''],
        confirmPassword:[''],
        firstName:[''],
        lastName:[''],
        address:[''],
        phoneNumber:['']
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    const email: string = this.registerForm.value.email;
    const password: string = this.registerForm.value.password;
    const displayName: string = this.registerForm.value.displayName;
    const firstName: string = this.registerForm.value.firstName;
    const lastName: string = this.registerForm.value.lastName;
    const address: string = this.registerForm.value.address;
    const phoneNumber: string = this.registerForm.value.phoneNumber;

    this.authProv.registerUser(email,password, displayName, firstName, lastName, address, phoneNumber).then(user=>{
        this.loading.dismiss().then(()=>{
        this.navCtrl.setRoot(TabsPage);
      });
    })
    this.loading = this.loadCtrl.create();
    this.loading.present()
  }

}
