import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-my-moovit',
  templateUrl: 'my-moovit.html',
})
export class MyMoovitPage {

private phoneNumber:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.phoneNumber = this.navParams.data;
    // console.log("phone is:" + this.navParams.data);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MyMoovitPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

}
