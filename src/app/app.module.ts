import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';

import { firebaseConfig } from '../config/firebase.config';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HomeOrtPage } from '../pages/home-ort/home-ort';
import { ListaAutobusesPage } from '../pages/lista-autobuses/lista-autobuses';
import { LoginPage } from '../pages/login/login';

// AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// maps
import { AgmCoreModule } from '@agm/core';

// providers
import { AutobusesProvider } from '../providers/autobuses/autobuses';
import { AuthProvider } from '../providers/auth/auth';
import { UsuarioProvider } from '../providers/usuario/usuario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaAutobusesPage,
    TabsPage,
    HomeOrtPage,
    LoginPage
  ],

  imports: [
  AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAG_oCjWM9LKCPBmUemDmYzAlSOtsyaoAQ'
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaAutobusesPage,
    TabsPage,
    HomeOrtPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutobusesProvider,
    AngularFireAuth,
    AuthProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
