import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //local variables
  login: any;
  password: any;
  user: any;
  cardNumber: any;

  newUser: any;
  newPass: any;

  message: boolean = true;
  message2: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  //ask the user to register
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Register',
      inputs: [//ask for username and password and card details
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        },
        {
          name: 'cardDetails',
          placeholder: 'Card Number'
        }
      ],
      buttons: [
        {//if this is pressed then cancel the prompt message
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {//if this is pressed then save the info to the local variables
          text: 'Register',
          handler: data => {
            this.login = data.username
            this.password = data.password;
            this.cardNumber = data.cardDetails;
          }
        }
      ]
    });
    alert.present();
  }

  //ask the user to login
  loginUser()
  {
    let alert = this.alertCtrl.create({
      title: 'Register',
      inputs: [//ask the user for the username and password
        {
          name: 'newUsername',
          placeholder: 'Username'
        },
        {
          name: 'newPassword',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {//cancel the login
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {//login if the details match the details when registering
          text: 'Login',
          handler: data => {

            this.newUser = data.newUsername;
            this.newPass = data.newPassword;
            
            //if the register and login match then purchace successful and try again
            if (this.newUser == this.login && this.newPass == this.password) {
              if (this.message == true) {
                this.message = false;
                this.message2 = true;
              }
              else
              {
                this.message = true;
                this.message2 = false;
              }
            } 
            else
            {
              if (this.message2 == true) {
                this.message2 = false;
                this.message = true;
              }
              else
              {
                this.message2 = true;
                this.message = false;
              }
            }

          }
        }
      ]
    });
    alert.present();
    
  }

  //go to the home page
  homePage()
  {
    this.navCtrl.pop();
    this.navCtrl.pop();
    this.navCtrl.pop();
    this.navCtrl.pop();
    this.navCtrl.pop();
  }

}
