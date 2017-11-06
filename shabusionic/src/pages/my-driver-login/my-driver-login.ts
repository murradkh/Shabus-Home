import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import{ LoadingController,ToastController} from 'ionic-angular'
import {Authunication} from '../../services/serverside';



@IonicPage()
@Component({
  selector: 'page-my-driver-login',
  templateUrl: 'my-driver-login.html',
})
export class MyDriverLoginPage {
private username:string="";
private password:string="";
private splash = true;

constructor(private alert:AlertController,
              private auth:Authunication ,
              private navCtrl: NavController,
              private navParams: NavParams,
              private Loadingcontrol:LoadingController,
              private toastctrl:ToastController) {

  }

ionViewDidLoad() {
    setTimeout(() => this.splash = false, 3500);
   // this.menuCtrl.enable(false, 'myMenu');
  }

  onsignin(){

     const loading=this.Loadingcontrol.create({
content:' ...מתחבר'
    });
     loading.present();
    this.auth.signin(this.username,this.password).then(data => {
loading.dismiss();

  setTimeout( () => {

const alert=this.alert.create({
  title:"המשמרת הסתיימה",
buttons:['Ok']

});
alert.present();

     this.auth.logout()
},
   21600000);



    }).catch(error => {
     loading.dismiss();
const toast=this.toastctrl.create({
  message:"לא זיהינו אותך ,נא לנסות שוב",
  duration:3000
 

});
toast.present();
    });
  
  }

}
