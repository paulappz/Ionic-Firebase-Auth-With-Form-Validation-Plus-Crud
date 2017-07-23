import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FirebaseServiceProvider} from './../providers/firebase-service/firebase-service';
import { SignupServiceProvider } from './../providers/signup-service/signup-service';
import { AngularFireAuthModule } from 'angularfire2/auth';


// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCOLDNvvzgt-md1M_5yG3TumJTru1SFfzI",
    authDomain: "ionicangfireapp.firebaseapp.com",
    databaseURL: "https://ionicangfireapp.firebaseio.com",
    projectId: "ionicangfireapp",
    storageBucket: "ionicangfireapp.appspot.com",
    messagingSenderId: "534027396788"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [ 
    FirebaseServiceProvider,StatusBar,SplashScreen,{provide: ErrorHandler, useClass: IonicErrorHandler},
    SignupServiceProvider]
})
export class AppModule {}


