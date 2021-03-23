import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { SortDirection } from "../../../pipes/order-by-pipe/order-by.pipe";
import { CoursesServiceService } from "../../../services/courses-service/courses-service.service";
import { Course } from "../../../interfaces/course-interface/course-interface";

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

  constructor(private _coursesService: CoursesServiceService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
    this.getCourses();
    this.coursesList.length > 0 ? (this.noData = false) : (this.noData = true);
  }

  getCourses() {
    this._coursesService.getCourses()
      .subscribe((response) => {
      this.coursesList = response;
    });
  }

  loadMore() {
    console.log("Load more clicked");
  }

  deleteCourseTrigger(id) {
    this.coursesList = this.coursesList.filter(course => course.Id !== id);
  }
}
