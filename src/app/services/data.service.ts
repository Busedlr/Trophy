import { Injectable } from "@angular/core";

import * as firebase from "firebase/app";
import "firebase/firestore";

@Injectable({
  providedIn: "root"
})
export class DataService {
  db: any;
  contactsRef: any;
  notContacted = [];
  contacted = [];

  constructor() {
    this.db = firebase.firestore();
    this.contactsRef = this.db.collection("contacts");
  }

  sendData(contactForm) {
    let contactData = {
      last_name: contactForm.controls.lastName.value,
      first_name: contactForm.controls.firstName.value,
      email: contactForm.controls.email.value,
      comments: contactForm.controls.comments.value,
      status: 0
    };

    this.contactsRef
      .add(contactData)
      .then(doc => {
        console.log("document saved with id", doc.id);
        this.getNotContacted();
      })
      .catch(error => {
        console.log(error);
      });
  }

  getNotContacted() {
    this.notContacted = [];
    this.contactsRef
      .where("status", "==", 0)
      .get()
      .then(result => {
        result.forEach(document => {
          let contact = document.data();
          contact.id = document.id;
          this.notContacted.push(contact);
        });
      });
    console.log(this.notContacted);
  }

  getcontacted() {
    this.contacted = [];
    this.contactsRef
      .where("status", "==", 1)
      .get()
      .then(result => {
        result.forEach(document => {
          let contact = document.data();
          contact.id = document.id;
          this.contacted.push(contact);
        });
      });
    console.log(this.contacted);
  }

  markContacted(id) {
    return this.contactsRef
      .doc(id)
      .update({
        status: 1
      })
      .then(() => {
        this.getcontacted();
        this.getNotContacted();
      });
  }

  markNotContacted(id) {
    return this.contactsRef
      .doc(id)
      .update({
        status: 0
      })
      .then(() => {
        this.getcontacted();
        this.getNotContacted();
      });
  }
}
