import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { DataService } from '../services/data.service';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  lastNameInvalid: boolean = false;
  firstNameInvalid: boolean = false;
  emailInvalid: boolean = false;
  commentsInvalid: boolean = false;


  constructor(public formBuilder: FormBuilder, public dataService : DataService ) {
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
    if (this.contactForm.controls.lastName.invalid) {
      this.lastNameInvalid = true;
    }
    if (this.contactForm.controls.firstName.invalid) {
      this.firstNameInvalid = true;
    }
    if (this.contactForm.controls.email.invalid) {
      this.emailInvalid = true;
    }
    if (this.contactForm.controls.comments.invalid) {
      this.commentsInvalid = true;
    }
  }

  submit() {
    this.lastNameInvalid = false;
    this.firstNameInvalid = false;
    this.emailInvalid = false;
    this.commentsInvalid = false;

    console.log(this.contactForm.controls);
    this.isInvalid();

    if (this.contactForm.valid) {
      this.dataService.sendData(this.contactForm)

    }
  }
}
