import { Component, OnInit } from "@angular/core";
import { NewsData } from 'src/app/services/news-data';



@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"]
})
export class NewsComponent implements OnInit {

  constructor(public newsData: NewsData) {
    this.getData();
    this.getImage();

  }

  ngOnInit() {}

  getData() {
    this.newsData.articles = [];
    this.newsData.getData();
  }

  getImage() {
    this.newsData.getImage();
    }
}
