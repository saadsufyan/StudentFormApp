import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StudentDetailsPage } from '../pages/student-details/student-details';
import { NetworkService } from '../services/network.serivce';
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    StudentDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    StudentDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NetworkService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
