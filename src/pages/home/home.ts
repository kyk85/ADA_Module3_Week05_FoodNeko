import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Alert, AlertController, Loading, LoadingController } from 'ionic-angular'

import firebase from 'firebase'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  public alertCtrl:AlertController,
  public loadCtrl:LoadingController,
  ) {

  }

}
