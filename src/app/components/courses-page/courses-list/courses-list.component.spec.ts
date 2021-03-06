import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './courses-list.component';

describe('CoursesListComponent', () => {
  let component: CoursesListComponent;
  let fixture: ComponentFixture<CoursesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should console log load more', () => {
    const consoleSpy = spyOn(console, 'log');
    component.loadMore();

    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should console log delete event', () => {
    const consoleSpy = spyOn(console, 'log');
    component.deleteCourseTrigger({});

    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should contain data in coursesList variable', () => {
    expect(component.coursesList.length).toBeGreaterThan(0);
  });
});
