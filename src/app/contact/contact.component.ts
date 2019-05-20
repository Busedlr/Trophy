import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import * as firebase from "firebase/app";
import "firebase/firestore";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  db: any;
  contactsRef: any;
  contactForm: FormGroup;
  lastNameInvalid: boolean = false;
  firstNameInvalid: boolean = false;
  emailInvalid: boolean = false;
  commentsInvalid: boolean = false;

  constructor(public formBuilder: FormBuilder) {
    this.db = firebase.firestore();
    this.contactsRef = this.db.collection("contacts");
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.contactForm = this.formBuilder.group({
      lastName: ["", Validators.compose([Validators.required])],
      firstName: ["", Validators.compose([Validators.required])],
      email: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
        ])
      ],
      comments: ["", Validators.required]
    });
  }

  isInvalid() {
    if(this.contactForm.controls.lastName.invalid ) {
      this.lastNameInvalid = true;
    }
    if(this.contactForm.controls.firstName.invalid ) {
      this.firstNameInvalid = true;
    }
    if(this.contactForm.controls.email.invalid ) {
      this.emailInvalid = true;
    }
    if(this.contactForm.controls.comments.invalid ) {
      this.commentsInvalid = true;
    }
  }

  submit() {
    this.lastNameInvalid = false;
    this.firstNameInvalid = false;
    this.emailInvalid = false;
    this.commentsInvalid = false;

    console.log(this.contactForm);
    this.isInvalid();
   
    if (this.contactForm.valid) {
      let contactData = {
        last_name: this.contactForm.controls.lastName.value,
        first_name: this.contactForm.controls.firstName.value,
        email: this.contactForm.controls.email.value,
        comments: this.contactForm.controls.comments.value,
        status: 0
      };

      this.contactsRef
        .add(contactData)
        .then(doc => {
          console.log("document saved with id", doc.id);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
