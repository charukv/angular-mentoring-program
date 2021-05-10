import { Component, OnInit, SimpleChanges } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-courses-page",
  templateUrl: "./courses-page.component.html",
  styleUrls: ["./courses-page.component.scss"],
})
export class CoursesPageComponent implements OnInit {
  searchControl: AbstractControl;
  searchValueSubmitted: string;
  filterText: string = '';
  searchSubject = new Subject<string>();

  searchForm = this.fb.group({
    searchValue: ['']
  });

  constructor(private fb: FormBuilder) {
    this.searchSubject
      .pipe(debounceTime(700))
      .subscribe((searchValue: string) => {
        this.filterText = searchValue;
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void { 
    this.searchControl = this.searchForm.get('searchValue');
  }

  search() {
    let searchValueLength =  this.searchControl.value.replace(/\s/g, '').length;
    if (searchValueLength >= 3 || searchValueLength === 0)
      this.searchSubject.next(this.searchControl.value);
  }
}
