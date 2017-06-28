import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import angulafire
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActionSheetController } from 'ionic-angular'
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EnquiryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-enquiry',
  templateUrl: 'enquiry.html',
})
export class EnquiryPage {

  clients: FirebaseListObservable<any>;
  
	constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public actionSheetCtrl:ActionSheetController,
    public alertCtrl:AlertController) {
	  this.clients = db.list('/clients')
	}
    	
  client = {}

	clientInfo() {
    this.clients.push(this.client)
    let alert = this.alertCtrl.create({
      title: 'Client Created',
      subTitle: 'Client has created successfully',
      buttons: ['Ok']
    });
    alert.present();
    this.client = {}
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
	}  
	
	ionViewDidLoad() {
  	console.log('ionViewDidLoad EnquiryPage');
	}

  showOptions(key , client){
    let _self = this
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Remove',
          role: 'destructive',
          handler: () => {
            _self.clientConfirm(key)
          }
        },
        {
          text: 'Update',
          handler: () => {
            _self.updateClient(key, client)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
    actionSheet.present();
  }

  updateClient(key, client){

  }

  clientConfirm(key) {
    let _self = this
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete !',
      message: 'Do you want to delete this client?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Buy clicked');
            _self.removeClient(key)
          }
        }
      ]
    });
    alert.present();
  }

  removeClient(key){
    this.clients.remove(key)
  }
}

