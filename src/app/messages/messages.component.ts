import { Component, OnInit } from '@angular/core';

import * as firebase from "firebase/app";
import "firebase/firestore";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  db: any;
  contactsRef: any;
  contactThem= [];

  constructor() { 
    this.db = firebase.firestore();
    this.contactsRef = this.db.collection("contacts");
    this.getData();
  }

  ngOnInit() {
  }

  getData() {
this.contactsRef.where("status", "==", 0)
    .get()
    .then((result)=> {
      result.forEach((document)=> {
        this.contactThem.push(document.data())
      })
    })
    console.log(this.contactThem)
  }

  refreshData() {
    this.contactThem = [];
    this.getData();
  }
}







/* db.collection("cities").where("capital", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    }); */