import { Component, ViewChild } from '@angular/core';
import { NavController,
		 AlertController } from 'ionic-angular';
import { Slides, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	@ViewChild(Slides) slides:Slides;
  	usuario:string;

  constructor( public navCtrl: NavController,
							 private auth: AuthProvider,
							 public alertCtrl: AlertController,
							
							 public _us: UsuarioProvider,
							 public loadingCtrl: LoadingController ) {
                
                
	}
	
	ionViewDidLoad(){
		this.slides.paginationType = 'progress';
		this.slides.lockSwipes(true);
		this.slides.freeMode = false;
	}
	abrirInput(){
		let input = this.alertCtrl.create({
			title: 'Login',
			message: "ingrese su usuario y contraseña para poder entrar",
			inputs:[
				{
          name: 'email',
					placeholder: 'Email',
					type: 'email'
				},
				{
          name: 'password',
					placeholder: 'Password',
					type: 'password'
        },
			],
			buttons: [
				{
          text: 'Cancel'
				},
				{
          text: 'Ingresar',
          handler: data => {
			  			
						if(data.email != "" && data.password != ""){
							this.login(data)
						} else { 
							let alerta = this.alertCtrl.create({
								title: 'Error al ingresar',
								message: "El usuario o contraseña están vacíos",
								buttons: [
									{text: 'Aceptar'}
								]
							});
							alerta.present();
						}				
          }
        }
			]
		});
		input.present();
	}

	continuar(){
		console.log("has ingresado tio");
		this.navCtrl.setRoot ( TabsPage );
		this._us.cargarStorage();
		
	}

  login(datos) {
	  let loading = this.loadingCtrl.create({
		content: 'Verificando'
	  });
	  loading.present();
		let data = datos;
		
		if (!data.email) {
			return;
		}
		this.usuario = data.email;
		let credentials = {
			email: data.email,
			password: data.password
		};		
		
		this.auth.signInWithEmail(credentials)
			.then( existe => {
					loading.dismiss();
					if(existe){
						this.slides.lockSwipes(false);
						this.slides.freeMode = true;
						this.slides.slideNext();
						this.slides.lockSwipes(true);
						this.slides.freeMode = false;
						this._us.guardarStorage(this.usuario);
					} else {
						this.alertCtrl.create({
							title: 'Usuario incorrecto',
							subTitle: 'hable con el administrador o intente de nuevo',
							buttons:['Aceptar']
						}).present()
					}
				}
			);
	}

		
	}
