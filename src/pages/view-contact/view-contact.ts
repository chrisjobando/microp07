import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import​ { ​Contact​ } ​ from​ '../../models/contact.model';
import​ { ​ContactService​ } ​from​ ​'../../services/contact.service'​;
import { l } from '@angular/core/src/render3';

@IonicPage()
@Component({
  selector: 'page-view-contact',
  templateUrl: 'view-contact.html',
})
export class ViewContactPage {

  contact: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private contactService: ContactService) {
      this.contact = this.navParams.data;
      console.log(this.contact.key);
  }

  onUpdateContact(value: Contact) {
    this.contactService.updateContact(value);
    this.navCtrl.pop();
  }

  onRemoveContact(value: Contact) {
    this.contactService.removeContact(value);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewContactPage');
  }

}
