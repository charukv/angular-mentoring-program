import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Course } from "src/app/interfaces/course-interface/course-interface";

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {

  coursesItem: Course;

  @Input() set CoursesItem(item) {
    this.coursesItem = item;
  }
  @Output() deleteCourse = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  delete() {
    this.deleteCourse.emit(this.coursesItem.Id);
  }

}
