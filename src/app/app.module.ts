import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EnquiryPage } from '../pages/enquiry/enquiry';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import angularfire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const firebaseConfig = {
  apiKey: "AIzaSyDzo4JcjfCwK-EmgpNUBBwqNv7XwT-NYdc",
  authDomain: "ommm-c3633.firebaseapp.com",
  databaseURL: "https://ommm-c3633.firebaseio.com",
  projectId: "ommm-c3633",
  storageBucket: "ommm-c3633.appspot.com",
  messagingSenderId: "845527700474"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EnquiryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EnquiryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
