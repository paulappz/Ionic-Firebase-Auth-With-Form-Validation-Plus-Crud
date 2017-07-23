import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupServiceProvider } from '../../providers/signup-service/signup-service';
import { EmailValidator } from '../../validators/email';
import { 
  IonicPage, 
  NavController, 
  LoadingController, 
  Loading, 
  AlertController } from 'ionic-angular';
  
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

loginForm:FormGroup;
loading:Loading;

  constructor(public navCtrl: NavController, public authData: SignupServiceProvider, 
  public formBuilder: FormBuilder, public alertCtrl: AlertController,
  public loadingCtrl: LoadingController) {

 this.loginForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
        password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
      });
    }



     
    loginUser(){
      if (!this.loginForm.valid){
        console.log(this.loginForm.value);
      } else {
        this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .then( authData => {
          this.navCtrl.setRoot('CarPage');
        }, error => {
          this.loading.dismiss().then( () => {
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });

        this.loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
        });
        this.loading.present();
      }
  }

  goToResetPassword(){
    this.navCtrl.push('ResetPage');
  }

  createAccount(){
    this.navCtrl.push('SignupPage');
  }

}