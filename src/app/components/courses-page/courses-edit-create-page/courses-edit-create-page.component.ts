import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { add, edit } from 'src/app/actions/courses.actions';
import { CoursesServiceService } from 'src/app/services/courses-service/courses-service.service';
import { SpinnerServiceService } from 'src/app/services/spinner-service/spinner-service.service';
import { Course } from "../../../interfaces/course-interface/course-interface";
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Author } from 'src/app/interfaces/author-interface/author-interface';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { E } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-courses-edit-create-page',
  templateUrl: './courses-edit-create-page.component.html',
  styleUrls: ['./courses-edit-create-page.component.scss']
})
export class CoursesEditCreatePageComponent implements OnInit {

  _course: Course = new Course();
  routeSub: Subscription;
  lengthControl: AbstractControl;
  nameControl: AbstractControl;
  descriptionControl: AbstractControl;
  allAuthors: Author[] = [];
  selectedAuthors: Author[] = [];
  courseId: number;
  pipe = new DatePipe('en-US');
  addUpdateStr: string;

  courseForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    date: ['', Validators.required],
    length: ['', Validators.required],
    author: ['']
  });

  constructor(
    private _coursesService: CoursesServiceService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _spinnerServiceService: SpinnerServiceService,
    private fb: FormBuilder,
    private store: Store<{ courses: Course[] }>,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.routeSub = this._activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.getCourseById(params['id']);
        this.translate.stream("COURSES.UPDATE_COURSE")
          .subscribe((text) => {
            this.addUpdateStr = text;
          });
      } else {
        this.translate.stream("COURSES.ADD_COURSE")
          .subscribe((text) => {
            this.addUpdateStr = text;
          });
      }
    });
    this.getAllAuthors();
    this.lengthControl = this.courseForm.get('length');
    this.nameControl = this.courseForm.get('name');
    this.descriptionControl = this.courseForm.get('description');
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getCourseById(courseId) {
    this._spinnerServiceService.show();
    this._coursesService.getCourseById(courseId)
      .pipe(finalize(() => { this._spinnerServiceService.hide(); }))
      .subscribe((response: Course) => {
        this.courseId = response.id;
        this.selectedAuthors = response.authors;
        this.courseForm.patchValue({
          name: response.name,
          description: response.description,
          date: this.pipe.transform(new Date(response.date), 'dd/MM/yyyy'),
          length: response.length,
        })
      });
  }

  cancel() {
    this._router.navigate(['courses']);
  }

  onSubmit(course) {
    let dateParts = course.date.split("/");
    let validDate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    course.date = validDate;
    if (this.courseId) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    course = {
      ...course,
      authors: this.selectedAuthors
    }
    this._spinnerServiceService.show();
    this._coursesService.createCourse(course)
      .pipe(finalize(() => { this._spinnerServiceService.hide(); }))
      .subscribe((response: Course) => {
        this.store.dispatch(add({ course: response }))
        this._router.navigate(['courses'])
      });
  }

  updateCourse(course) {
    course = {
      ...course,
      id: this.courseId,
      authors: this.selectedAuthors
    }
    this._spinnerServiceService.show();
    this._coursesService.updateCourse(course)
      .pipe(finalize(() => { this._spinnerServiceService.hide(); }))
      .subscribe((response: Course) => {
        this.store.dispatch(edit({ course: response }))
        this._router.navigate(['courses'])
      });
  }

  getAllAuthors() {
    this._coursesService.getAllAuthors()
      .subscribe((response: Author[]) => {
        this.allAuthors = response;
      });
  }
}
