import { Component, OnInit } from "@angular/core";

import { ContactData } from "src/app/services/contact-data";

import * as firebase from "firebase/app";
import "firebase/storage";

@Component({
  selector: "app-admin-contacts",
  templateUrl: "./admin-contacts.component.html",
  styleUrls: ["./admin-contacts.component.css"]
})
export class AdminContactsComponent implements OnInit {
  storageRef: any;
  imageRef: any;

  constructor(public contactData: ContactData) {
    this.contactData.getcontacted();
    this.contactData.getNotContacted();

    this.storageRef = firebase.storage().ref();
    this.imageRef = this.storageRef.child("images/image2.jpg");
  }

  ngOnInit() {}

  resetInput(fileId) {
    let fileInput = document.getElementById(fileId) as HTMLInputElement;
    fileInput.value = "";
  }

  selectFile(event) {
    let file = event.srcElement.files[0];
    console.log('file', file)
    this.imageRef
      .put(file)
      .then(result => {
        console.log(result);
        // feedback to user or any other function
      })
      .catch(error => {
        console.log(error);
      });
  }

}
