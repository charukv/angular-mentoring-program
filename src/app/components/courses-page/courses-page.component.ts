import { Component, OnInit, SimpleChanges } from "@angular/core";
import { CoursesServiceService } from "src/app/services/courses-service/courses-service.service";

@Component({
  selector: "app-courses-page",
  templateUrl: "./courses-page.component.html",
  styleUrls: ["./courses-page.component.scss"],
})
export class CoursesPageComponent implements OnInit {
  searchValue: string = '';
  searchValueSubmitted: string;
  filterText: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void { }

  search() {
    this.filterText = this.searchValue;
  }
}
