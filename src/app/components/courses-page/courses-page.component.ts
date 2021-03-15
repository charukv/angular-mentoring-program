import { Component, OnInit, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-courses-page",
  templateUrl: "./courses-page.component.html",
  styleUrls: ["./courses-page.component.scss"],
})
export class CoursesPageComponent implements OnInit {
  searchValue: string;
  searchValueSubmitted: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {}

  search() {
    this.searchValueSubmitted = this.searchValue;
  }
}
