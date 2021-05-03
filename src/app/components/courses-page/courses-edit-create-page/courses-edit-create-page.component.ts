import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { add, edit } from 'src/app/actions/courses.actions';
import { CoursesServiceService } from 'src/app/services/courses-service/courses-service.service';
import { SpinnerServiceService } from 'src/app/services/spinner-service/spinner-service.service';
import { Course } from "../../../interfaces/course-interface/course-interface";

@Component({
  selector: 'app-courses-edit-create-page',
  templateUrl: './courses-edit-create-page.component.html',
  styleUrls: ['./courses-edit-create-page.component.scss']
})
export class CoursesEditCreatePageComponent implements OnInit {

  _course: Course = new Course();
  routeSub: Subscription;

  constructor(
    private _coursesService: CoursesServiceService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _spinnerServiceService: SpinnerServiceService,
    private store: Store<{ courses: Course[] }>
  ) { }

  ngOnInit(): void {
    this.routeSub = this._activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.getCourseById(params['id']);
      }
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getCourseById(courseId) {
    this._spinnerServiceService.show();
    this._coursesService.getCourseById(courseId)
      .pipe(finalize(() => { this._spinnerServiceService.hide(); }))
      .subscribe((response: Course) => {
        this._course = response;
      });
  }

  cancel() {
    this._router.navigate(['courses']);
  }

  onSubmit(course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    this._spinnerServiceService.show();
    this._coursesService.createCourse(course)
      .pipe(finalize(() => { this._spinnerServiceService.hide(); }))
      .subscribe((response: Course) => {
        this.store.dispatch(add({ course: response }))
        this._router.navigate(['courses'])
      });
  }

  updateCourse(course) {
    this._spinnerServiceService.show();
    this._coursesService.updateCourse(course)
      .pipe(finalize(() => { this._spinnerServiceService.hide(); }))
      .subscribe((response: Course) => {
        this.store.dispatch(edit({ course: response }))
        this._router.navigate(['courses'])
      });
  }
}
