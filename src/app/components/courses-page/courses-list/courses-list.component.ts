import { Component, Input, OnInit, SimpleChanges } from "@angular/core";
import { SortDirection } from "../../../pipes/order-by-pipe/order-by.pipe";
import { CoursesServiceService } from "../../../services/courses-service/courses-service.service";
import { Course } from "../../../interfaces/course-interface/course-interface";
import { finalize } from "rxjs/operators";
import { SpinnerServiceService } from "../../../services/spinner-service/spinner-service.service";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { load, remove, set } from "src/app/actions/courses.actions";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.scss"],
})
export class CoursesListComponent implements OnInit {
  sortDirection = SortDirection.Desc;
  coursesStart = 0;
  coursesCount = 3;
  filterText: string;
  coursesLength: number;
  courses$: Observable<Course[]>;

  @Input() searchValue: string;
  @Input() set FilterText(text) {
    this.filterText = text;
    this.coursesStart = 0;
    this.getNewCoursesList(this.coursesStart, this.coursesCount, this.filterText);
  };

  constructor(private _coursesService: CoursesServiceService,
    private _spinnerServiceService: SpinnerServiceService,
    private store: Store<{ courses: Course[] }>) {
    this.courses$ = store.select('courses');
    this.courses$.subscribe(courses => {
      this.coursesLength = courses.length
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void { }

  getCourses(start, count, filterText) {
    this._spinnerServiceService.show();
    this._coursesService.getCourses(start, count, filterText)
      .pipe(finalize(() => { this._spinnerServiceService.hide(); }))
      .subscribe((response) => {
        this.store.dispatch(load({ courses: response }));
      });
  }

  getNewCoursesList(start, count, filterText) {
    this._spinnerServiceService.show();
    this._coursesService.getCourses(start, count, filterText)
      .pipe(finalize(() => { this._spinnerServiceService.hide(); }))
      .subscribe((response) => {
        this.store.dispatch(set({ courses: response }));
      });
  }

  loadMore() {
    this.coursesStart = this.coursesLength
    this.getCourses(this.coursesStart, this.coursesCount, this.filterText);
  }

  deleteCourseTrigger(id) {
    this._spinnerServiceService.show();
    this._coursesService.removeCourse(id)
      .pipe(finalize(() => {
        this._spinnerServiceService.hide();
      }))
      .subscribe((response) => {
        this.store.dispatch(remove({ courseId: id }));
      });
  }
}
