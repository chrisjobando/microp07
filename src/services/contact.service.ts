import​ {​ Injectable​ } ​from​ ​"@angular/core"​;
import​ { AngularFireDatabase​ } from​​ "angularfire2/database"​;
import { Contact } from "../models/contact.model";

@Injectable()
export class ContactService {
    // private contacts: Contact[] =
    // [{"name":"Andres", "organization":"UC3M", "mobile":"6666666666",
    // "email":"andres@example.com"}];

    private contactsRef = this.db.list<Contact>('AgendaFirebase');
    constructor(private db:AngularFireDatabase) {

    }

    addContact(value: Contact) {
        // this.contacts.push(value);
        return this.contactsRef.push(value);
    }

    getContacts() {
        // return this.contacts;
        return this.contactsRef;
    }

    updateContact(value: Contact) {

    }

    removeContact(value:Contact) {

    }
}