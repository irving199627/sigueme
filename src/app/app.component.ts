import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { UsuarioProvider } from '../providers/usuario/usuario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public _usuario: UsuarioProvider ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      _usuario.cargarStorage().then(existe => {
        statusBar.styleDefault();
        splashScreen.hide();

        if (existe) {
          this.rootPage = TabsPage;
        } else {
          this.rootPage = LoginPage;
        }
      })

      
    });
  }
}

