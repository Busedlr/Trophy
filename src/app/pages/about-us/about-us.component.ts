import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import "firebase/firestore";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"]
})
export class AboutUsComponent implements OnInit {
  db: any;
  usersRef: any;

  constructor() {
    this.db = firebase.firestore();
    this.usersRef = this.db.collection("users");

    this.getUsers();
  }

  ngOnInit() {}

  getUsers() {
    this.usersRef.get().then(users => {
      users.forEach(user => {
        console.log(user.data());
      });
    });
  }
}
