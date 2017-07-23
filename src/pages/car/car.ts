import { Component } from '@angular/core';
import{FirebaseListObservable} from 'angularfire2/database';
import { NavController , IonicPage} from 'ionic-angular';
import {FirebaseServiceProvider} from '../../providers/firebase-service/firebase-service';
  
@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {
shoppingItems: FirebaseListObservable<any[]>;

newItem = ''; 
  constructor(public navCtrl: NavController, public firebaseServiceProvider : FirebaseServiceProvider) {
    this.shoppingItems = this.firebaseServiceProvider.getShoppingItems();
  }

  addItem(){
    console.log(this.newItem);
    this.firebaseServiceProvider.addItem(this.newItem);
  }

  removeItem(id){
    this.firebaseServiceProvider.removeItem(id);
  }
}
