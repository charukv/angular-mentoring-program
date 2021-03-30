import { Component, Input, OnInit } from '@angular/core';
import { Course } from "../../../interfaces/course-interface/course-interface";

@Component({
  selector: 'app-courses-edit-create-page',
  templateUrl: './courses-edit-create-page.component.html',
  styleUrls: ['./courses-edit-create-page.component.scss']
})
export class CoursesEditCreatePageComponent implements OnInit {

  _course: Course = new Course();

  constructor() { }

  ngOnInit(): void {
  }

  cancel() { }

  onSubmit() { }
}
