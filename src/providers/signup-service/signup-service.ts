import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app';

/*
  Generated class for the SignupServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SignupServiceProvider {

  constructor(public afAuth: AngularFireAuth, public afdsignup: AngularFireDatabase) {
    console.log('Hello SignupServiceProvider Provider');
  }

loginUser(newEmail: string, newPassword: string): firebase.Promise<any> {
  return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
}

resetPassword(email: string): firebase.Promise<any> {
  return this.afAuth.auth.sendPasswordResetEmail(email);
}

logoutUser(): firebase.Promise<any> {
  return this.afAuth.auth.signOut();
}

signupUser(newEmail: string, newPassword: string): firebase.Promise<any> {
  return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
}




/* 
    getusers(){
    return this.afdsignup.list('users/');
  }

 adduser(details){
    this.afdsignup.list('users/').push(details);
    console.log(details);
  }
*/
}
