import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController } from 'ionic-angular';
// import { Authunication} from '../../services/serverside'
import { MyMoovitPage } from '../my-moovit/my-moovit';//--------//
import{ LoadingController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-client',
  templateUrl: 'my-client.html',
})
export class MyClientPage {

  clientCounter: number=1;
  phoneNumber: string="";

  constructor(public navCtrl: NavController,
              private Loadingcontrol:LoadingController,
              private alert:AlertController) {

  }

    addClient(){
      if(this.clientCounter<5)
        this.clientCounter++;
      
    }

  removeClient(){
    if(this.clientCounter>1){
      this.clientCounter--;
    }
  }
  send(){
     const loading=this.Loadingcontrol.create({
content:' ...בדיקת ניתונים',
duration:2500
    });
     loading.present();
loading.onDidDismiss(()=>{
  this.navCtrl.push(MyMoovitPage,this.phoneNumber);
  
});
  //  this.auth.getuser().getToken().then( (token:string) => {

//    this.auth.send(token).subscribe((response:any) => {
//      loading.dismiss();
//   var x=response.json();
//      console.log(x);
//       let data={};
//       for (let prop in x) {
//       data=x[prop]
//     }
//     let check=false;
//       for (let prop in data) {
// if(data[prop]==this.phoneNumber ){
//   check=true;
// const alert=this.alert.create({
//   title:"הפרטים נקלטו",
// buttons:['Ok']

// });
// alert.present();
// break;
// }


      // }
      // if(check==false){
// }



  //  },
  //  error => {
  //    loading.dismiss();
  //    console.log(error);
  //  }
  //  );
   

  //  });

  }






}








