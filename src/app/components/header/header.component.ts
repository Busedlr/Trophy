import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {
    /* @HostListener()  */
  }
  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  scrollHandler(event) {
    let navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } 

    /* value must correspond to ".header-image => height" in style.css */
    if (window.pageYOffset < 320) {
      navbar.classList.remove("sticky");
    }
  }
}
