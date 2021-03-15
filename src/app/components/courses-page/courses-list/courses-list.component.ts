import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { SortDirection } from "src/app/pipes/order-by-pipe/order-by.pipe";
import { Course } from '../../../interfaces/course-interface/course-interface';

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"],
})
export class CoursesListComponent implements OnInit {
  coursesList: Course[];
  noData: boolean = false;
  sortDirection = SortDirection.Desc;

  @Input() searchValue: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
    this.coursesList = [
      {
        Id: 1,
        Title: "Video Course 1.",
        Name: "Name tag",
        CreationDate: new Date(),
        Duration: 28,
        Description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim 
        ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        topRated: true,
      },
      {
        Id: 2,
        Title: "Video Course 2.",
        Name: "Name tag",
        CreationDate: new Date("10/10/2030"),
        Duration: 97,
        Description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim 
        ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        topRated: false,
      },
      {
        Id: 3,
        Title: "Video Course 3.",
        Name: "Name tag",
        CreationDate: new Date("02/28/2021"),
        Duration: 135,
        Description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim 
        ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        topRated: true,
      },
    ];

    this.coursesList.length > 0 ? (this.noData = false) : (this.noData = true);
  }

  loadMore() {
    console.log("Load more clicked");
  }

  deleteCourseTrigger(event) {
    console.log(event);
  }
}
