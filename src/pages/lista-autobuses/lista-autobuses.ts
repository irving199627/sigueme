import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { AutobusesProvider } from '../../providers/autobuses/autobuses';
import { UsuarioProvider } from '../../providers/usuario/usuario';


@Component({
  selector: 'page-lista-autobuses',
  templateUrl: 'lista-autobuses.html',
})
export class ListaAutobusesPage {
  seguirAutobus: string;
  constructor( public navCtrl: NavController, 
               public viewCrtl: ViewController,
               public _ap: AutobusesProvider, 
               public _us: UsuarioProvider ) {
                
  }

  seguirA( seguir ){
    this.viewCrtl.dismiss( seguir );
  }

  cerrarModal(){
    this.viewCrtl.dismiss();
  }

  salir(){
    this.navCtrl.setRoot(LoginPage);
    this._us.borrarUsuario();
  }
}
