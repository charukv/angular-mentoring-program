import { Component, OnInit, SimpleChanges } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: "app-courses-page",
  templateUrl: "./courses-page.component.html",
  styleUrls: ["./courses-page.component.scss"],
})
export class CoursesPageComponent implements OnInit {
  searchValue: string = '';
  searchValueSubmitted: string;
  filterText: string = '';
  searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject
      .pipe(debounceTime(700))
      .subscribe((searchValue: string) => {
        this.filterText = searchValue;
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void { }

  search() {
    let searchValueLength = this.searchValue.replace(/\s/g, '').length;
    if (searchValueLength >= 3 || searchValueLength === 0)
      this.searchSubject.next(this.searchValue);
  }
}
