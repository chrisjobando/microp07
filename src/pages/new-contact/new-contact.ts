import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contact.service';

@IonicPage()
@Component({
  selector: 'page-new-contact',
  templateUrl: 'new-contact.html',
})
export class NewContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private contactService: ContactService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewContactPage');
  }

  onAddContact(value:
    {name:string, organization:string, mobile:string, email:string}) {
      this.contactService.addContact(value);
      this.navCtrl.pop();
  }

}
