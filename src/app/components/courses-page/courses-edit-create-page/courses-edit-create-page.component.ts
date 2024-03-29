import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesServiceService } from 'src/app/services/courses-service/courses-service.service';
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
    private _router: Router
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
    this._coursesService.getCourseById(courseId)
      .subscribe((response: Course) => {
        this._course = response;
      });
  }

  cancel() { 
    this._router.navigate(['courses']);
   }

  onSubmit(course) {
    if (course.Id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course) {
    this._coursesService.createCourse(course)
      .subscribe((response: Course) => {
        this._router.navigate(['courses'])
      });
  }

  updateCourse(course) {
    this._coursesService.updateCourse(course)
      .subscribe((response: Course) => {
        this._router.navigate(['courses'])
      });
  }
}
