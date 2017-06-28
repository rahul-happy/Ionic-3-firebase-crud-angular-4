import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActionSheetController } from 'ionic-angular'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  clients: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public actionSheetCtrl:ActionSheetController,
    public alertCtrl:AlertController) {
    this.clients = db.list('/clients')
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
            console.log('Delete clicked');
            _self.removeClient(key)
          }
        }
      ]
    });
    alert.present();
  }

  updateClient(key, client){
    let prompt = this.alertCtrl.create({
      title: 'Update Client',
      message: "Enter a name of the client",
      inputs: [
        {
          name: 'client_name',
          placeholder: 'Client name',
          value: client.name
        },
        {
          name: 'client_description',
          placeholder: 'Client description',
          value: client.description
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.clients.update(key, {
              name: data.client_name,
              description: data.client_description 
            })
          }
        }
      ]
    });
    prompt.present();
  }

  removeClient(key){
    this.clients.remove(key)
  }
  
}
