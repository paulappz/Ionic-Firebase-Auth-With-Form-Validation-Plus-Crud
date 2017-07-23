import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupServiceProvider} from '../../providers/signup-service/signup-service';
import { EmailValidator } from '../../validators/email';


@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {
public resetPasswordForm:FormGroup;

constructor(public authData: SignupServiceProvider, public formBuilder: FormBuilder,
  public nav: NavController, public alertCtrl: AlertController) {


  this.resetPasswordForm = formBuilder.group({
    email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
  })
}

resetPassword(){
    if (!this.resetPasswordForm.valid){
      console.log(this.resetPasswordForm.value);
    } else {
      this.authData.resetPassword(this.resetPasswordForm.value.email)
      .then((user) => {
        let alert = this.alertCtrl.create({
          message: "We just sent you a reset link to your email",
          buttons: [
            {
              text: "Ok",
              role: 'cancel',
              handler: () => {
                this.nav.pop();
              }
            }
          ]
        });
        alert.present();
      }, (error) => {
        var errorMessage: string = error.message;
        let errorAlert = this.alertCtrl.create({
          message: errorMessage,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        errorAlert.present();
      });
    }
  }


}