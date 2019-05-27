import { Component, OnInit } from "@angular/core";

import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  
  constructor(public dataService: DataService) {
    this.dataService.getcontacted();
    this.dataService.getNotContacted();
  }

  ngOnInit() {}
}
