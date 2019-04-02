import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewContactPage } from '../new-contact/new-contact';
import { ViewContactPage } from '../view-contact/view-contact';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-contact-book',
  templateUrl: 'contact-book.html',
})
export class ContactBookPage {

  contacts$: Observable<Contact[]>;
  // contacts: Contact[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private ContactService: ContactService) {
  }

  ionViewWillEnter() {
    // this.contacts = this.ContactService.getContacts();
    this.contacts$ = this.ContactService
      .getContacts()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
  }

  onLoadContactsPage() {
    this.navCtrl.push(NewContactPage);
  }

  onItemTapped($event, contact) {
    this.navCtrl.push(ViewContactPage, contact);
  }

}
