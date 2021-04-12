import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppModule } from "src/app/app.module";

import { CoursesListItemComponent } from "./courses-list-item.component";

describe("CoursesListItemComponent", () => {
  let component: CoursesListItemComponent;
  let fixture: ComponentFixture<CoursesListItemComponent>;
  const courseItem = {
    id: 1,
    name: "Name tag",
    date: new Date(),
    length: 28,
    description: `Lorem ipsum`,
    isTopRated: true,
    Author: 'charukv'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [CoursesListItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should test coursesItem Input", () => {
    const expectedCoursesItem = courseItem;
    component.CoursesItem = expectedCoursesItem;
    expect(component.coursesItem).toBe(expectedCoursesItem);
  });

  it("should test deleteCourse Output", () => {
    let id;
    component.coursesItem = courseItem;
    component.deleteCourse.subscribe((value) => (id = value));

    component.delete(true);
    const deleteButton = fixture.debugElement.query(By.css("button.delete"));
    deleteButton.triggerEventHandler("click", null);
    fixture.detectChanges();

    expect(id).toBe(1);
  });
});
