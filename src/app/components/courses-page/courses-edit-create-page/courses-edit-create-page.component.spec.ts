import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesEditCreatePageComponent } from './courses-edit-create-page.component';

describe('CoursesEditCreatePageComponent', () => {
  let component: CoursesEditCreatePageComponent;
  let fixture: ComponentFixture<CoursesEditCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesEditCreatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesEditCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
