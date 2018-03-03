import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Alert, AlertController, Loading, LoadingController } from 'ionic-angular'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import firebase from 'firebase'
import { AuthProvider } from '../../providers/auth/auth'

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
    formBuilder:FormBuilder) {

      this.registerForm = formBuilder.group({
        username:[''],
        email:[''],
        password:[''],
        confirmPassword:[''],
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){
    const email: string = this.registerForm.value.email;
    const password: string = this.registerForm.value.password;

    this.authProv.registerUser(email,password).then(user=>{
      this.loading.dismiss().then(()=>{
        this.navCtrl.setRoot("TabsPage");
      });
    })
    this.loading = this.loadCtrl.create();
    this.loading.present()
  }

}
