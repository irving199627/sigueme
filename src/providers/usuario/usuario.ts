import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  clave;

  constructor( public platform: Platform,
               public storage: Storage ) {
    console.log('Hello UsuarioProvider Provider');
  }
  guardarStorage(datosUsuarios){
      this.clave = datosUsuarios;
    if (this.platform.is('cordova')) {
      // Celular
      this.storage.set('clave', this.clave);
    } else {
      console.log(this.clave);
      
      localStorage.setItem('clave', this.clave);
      
    }
    
  }

  cargarStorage(){
		return new Promise( (resolve, reject ) => {
			if (this.platform.is('cordova')) {
        // celular
        this.storage.get('clave').catch( val => {
          if (val) {
            this.clave = val;
            resolve(true);
          } else {
            resolve(false);
          }
        });
				
			}else{
				if ( localStorage.getItem('clave') ) {
					this.clave = localStorage.getItem('clave');
					resolve(true);
				} else {
					resolve(false);
				}
			}
		});
  }
  
  borrarUsuario(){
    this.clave = null;
    if (this.platform.is('cordova')) {
      // Celular
      this.storage.remove('clave');
    } else {
      localStorage.removeItem('clave');
    }
  }

}
