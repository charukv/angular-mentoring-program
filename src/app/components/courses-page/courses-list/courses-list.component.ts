import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { SortDirection } from "../../../pipes/order-by-pipe/order-by.pipe";
import { CoursesServiceService } from "../../../services/courses-service/courses-service.service";
import { Course } from "../../../interfaces/course-interface/course-interface";
import { finalize } from "rxjs/operators";
import { SpinnerServiceService } from "../../../services/spinner-service/spinner-service.service";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"],
})
export class CoursesListComponent implements OnInit {
  coursesList: Course[] = [];
  sortDirection = SortDirection.Desc;
  coursesStart = 0;
  coursesCount = 3;
  filterText: string;

  @Input() searchValue: string;
  @Input() set FilterText(text) {
    this.filterText = text;
    this.coursesStart = 0;
    this.getNewCoursesList(this.coursesStart, this.coursesCount, this.filterText);
  };

  constructor(private _coursesService: CoursesServiceService,
    private _spinnerServiceService: SpinnerServiceService) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void { }

  getCourses(start, count, filterText) {
    this._spinnerServiceService.show();
    this._coursesService.getCourses(start, count, filterText)
      .pipe(finalize(() => { this._spinnerServiceService.hide(); }))
      .subscribe((response) => {
        this.coursesList = this.coursesList.concat(response);
      });
  }

  getNewCoursesList(start, count, filterText) {
    this._spinnerServiceService.show();
    this._coursesService.getCourses(start, count, filterText)
      .pipe(finalize(() => { this._spinnerServiceService.hide(); }))
      .subscribe((response) => {
        this.coursesList = response;
      });
  }

  loadMore() {
    this.coursesStart = this.coursesList.length + 3;
    this.getCourses(this.coursesStart, this.coursesCount, this.filterText);
  }

  deleteCourseTrigger(id) {
    this._spinnerServiceService.show();
    this._coursesService.removeCourse(id)
      .pipe(finalize(() => {
        this._spinnerServiceService.hide();
        this.getNewCoursesList(this.coursesStart, this.coursesCount, this.filterText);
      }))
      .subscribe((response) => {
        this.coursesStart = 0;
      });
  }
}
