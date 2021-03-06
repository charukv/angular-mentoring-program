import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from "@angular/core/testing";
import { NavigationEnd, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { CoursesPageComponent } from "src/app/components/courses-page/courses-page.component";

import { BreadcrumbsComponent } from "./breadcrumbs.component";

describe("BreadcrumbsComponent", () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: "courses", component: CoursesPageComponent },
        ]),
      ],
      declarations: [BreadcrumbsComponent],
      providers: [{ provide: Router, useValue: { url: "/courses" } }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "courses" set url value to /courses', fakeAsync(() => {
    expect(component.url).toEqual('/courses');
  }));
});
