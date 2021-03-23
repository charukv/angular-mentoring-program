import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Course } from "src/app/interfaces/course-interface/course-interface";

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {

  coursesItem: Course = new Course();
  borderColor: string;
  currentDate: number = new Date().getTime();
  currentDate2: number = new Date().getTime();
  fourteenDays: number = 12096e5;
  popupText: string = 'Do you really want to delete this course?';
  popupVisibility: boolean = false;

  @Input() set CoursesItem(item) {
    let creationDateTime = item.CreationDate.getTime();
    this.coursesItem = item;
    if (creationDateTime < this.currentDate && creationDateTime >= this.currentDate - this.fourteenDays) {
      this.borderColor = 'green';
    } else if (creationDateTime > this.currentDate) {
      this.borderColor = 'blue';
    }
  }
  @Output() deleteCourse = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
  }

  delete(action) {
    if (action) {
      this.deleteCourse.emit(this.coursesItem.Id);
    }
  }

  deletePopup() {
    this.popupVisibility = true;
  }
}
