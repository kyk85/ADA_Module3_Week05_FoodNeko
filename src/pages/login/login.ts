import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Alert, AlertController, Loading, LoadingController } from 'ionic-angular'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import firebase from 'firebase'
import { RegisterPage } from '../../pages/register/register'
import { AuthProvider } from '../../providers/auth/auth'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public loadCtrl:LoadingController,
    public authProvider:AuthProvider,
    formBuilder:FormBuilder) {

      this.loginForm = formBuilder.group({
        email:[''],
        password:['']
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser(){
    this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(()=>{
      this.navCtrl.setRoot("LoginPage")
      .catch(error=>{
        console.log("ASDFDSFADSFDSAFAS")
      })
      
      
    });
  }

  goToRegister(){
    this.navCtrl.push("RegisterPage")
  }

}
