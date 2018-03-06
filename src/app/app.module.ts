import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//import { LoginPage } from '../pages/login/login';
//import { ProfilePage } from '../pages/profile/profile'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { ProfileProvider } from '../providers/profile/profile';
import { RestaurantProvider } from '../providers/restaurant/restaurant';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    //LoginPage,
    //ProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    //LoginPage,
    //ProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ProfileProvider,
    RestaurantProvider
  ]
})
export class AppModule {}
