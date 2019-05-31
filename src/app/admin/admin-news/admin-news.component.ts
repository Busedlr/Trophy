import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

import { NewsData } from '../../services/news-data'


@Component({
  selector: "app-admin-news",
  templateUrl: "./admin-news.component.html",
  styleUrls: ["./admin-news.component.css"]
})
export class AdminNewsComponent implements OnInit {
  newsForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public newsData: NewsData) {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.newsForm = this.formBuilder.group({
      mainTitle: [""],
      subtitle: [""],
      paragraph: [""]
    });
  }

  sendData() {
    this.newsData.sendData(this.newsForm);
  }

  resetInput() {
    this.newsData.resetInput("fileId");
  }

  selectFile() {
    this.newsData.selectFile(event);
  }
}
