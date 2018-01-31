 import { Injectable} from '@angular/core';
 import { Http} from '@angular/http';

import firebase from 'firebase';

@Injectable()
export class Authunication {
 public   authnicated:boolean=false;
    constructor(private http:Http){

}

signin(email:string,password:string){
return firebase.auth().signInWithEmailAndPassword(email,password);
}
logout(){
firebase.auth().signOut();
}
getuser(){
    return firebase.auth().currentUser;
}

send(token:string){
    const userid=this.getuser().uid;
    return this.http.get("https://shapus-ecbb4.firebaseio.com/"+userid+"/phonenumder.json?auth="+token);
}

}