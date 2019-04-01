import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactBookPage } from './contact-book';

@NgModule({
  declarations: [
    ContactBookPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactBookPage),
  ],
})
export class ContactBookPageModule {}
