import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// import firebase from 'firebase';

@Injectable()
export class Authunication {
    public authnicated: boolean = false;
    constructor(private http: Http) {

    }

    signin(Data: any) {
        // return firebase.auth().signInWithEmailAndPassword(email,password);
        console.log(Data);
        return this.http.get('https://staging-shabus.herokuapp.com/');

    }
    logout() {
        localStorage.clear();
        
        // firebase.auth().signOut();
    }
    // getuser(){
    //     return firebase.auth().currentUser;
    // }
    send(data: string) {
        // const userid=this.getuser().uid;
        //  return this.http.get("https://shapus-ecbb4.firebase.com/"+userid+"/number.json?auth="+token);
        console.log("sasafaf");
        //    let url="https://www.apple.com/itunes/";
        //    return this.http.get('https://staging-shabus.herokuapp.com/');

    }
}