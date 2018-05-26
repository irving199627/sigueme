import { Component } from '@angular/core';
import { ModalController, PopoverController } from 'ionic-angular';

import { AutobusesProvider } from '../../providers/autobuses/autobuses';
import { ListaAutobusesPage } from '../lista-autobuses/lista-autobuses';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor( public _as: AutobusesProvider,
               public modalCtrl: ModalController,
               public popoverCtrl: PopoverController ) {
   
  }

  ver( ){
    let modal = this.modalCtrl.create( ListaAutobusesPage );

    modal.present();

    modal.onDidDismiss( parametros => {
      if (parametros) {
        this._as.seguir( parametros )  
      }
      
    })
    
  }

  opciones(evento){
    // let popover = this.popoverCtrl.create(  )
  }
}
