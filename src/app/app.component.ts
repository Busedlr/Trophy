import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";
import { firebaseConfig } from "./credentials";
import "firebase/firestore";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Trophy";

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}
