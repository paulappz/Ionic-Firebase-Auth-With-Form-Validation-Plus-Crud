import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from 'angularfire2/database';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) {}
  
  getShoppingItems(){
    return this.afd.list('shoppingItems/');
  }

  addItem(name){
    this.afd.list('shoppingItems/').push(name);
  }

  removeItem(id){
    this.afd.list('shoppingItems/').remove(id);
  }
}
