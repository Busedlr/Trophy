import { Injectable } from "@angular/core";

import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

@Injectable({
  providedIn: "root"
})
export class NewsData {
  db: any;
  newsRef: any;
  storageRef: any;
  imageRef: any;
  articles: any = [];
  imageUrl: any;

  constructor() {
    this.db = firebase.firestore();
    this.newsRef = this.db.collection("news");
    this.storageRef = firebase.storage().ref();
    this.imageRef = this.storageRef.child("article-photos/image.jpg");
  }

  sendData(newsForm) {
    let article = {
      main_title: newsForm.controls.mainTitle.value,
      subtitle: newsForm.controls.subtitle.value,
      paragraph: newsForm.controls.paragraph.value
    };
    this.newsRef
      .add(article)
      .then(document => {
        console.log("document saved with ID:", document.id);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getData() {
    this.newsRef
      .get()
      .then(result => {
        result.forEach(document => {
          let article = document.data();
          article.id = document.id;
          this.articles.push(article);
        });
        console.log("articles", this.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }
  resetInput(fileId) {
    let fileInput = document.getElementById(fileId) as HTMLInputElement;
    fileInput.value = "";
  }

  selectFile(event) {
    let file = event.srcElement.files[0];
    this.imageRef
      .put(file)
      .then(result => {
        console.log(result);
        //success feedback
      })
      .catch(error => {
        console.log(error);
      });
  }

  getImage() {
    this.imageRef
      .getDownloadURL()
      .then(url => {
        this.imageUrl = url;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
