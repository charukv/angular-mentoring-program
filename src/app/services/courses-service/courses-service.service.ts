import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CoursesServiceService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return of([
      {
        Id: 1,
        Title: "Video Course 1.",
        Name: "Name tag",
        CreationDate: new Date(),
        Duration: 28,
        Description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim 
        ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        topRated: true,
      },
      {
        Id: 2,
        Title: "Video Course 2.",
        Name: "Name tag",
        CreationDate: new Date("10/10/2030"),
        Duration: 97,
        Description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim 
        ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        topRated: false,
      },
      {
        Id: 3,
        Title: "Video Course 3.",
        Name: "Name tag",
        CreationDate: new Date("02/28/2021"),
        Duration: 135,
        Description: `Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim 
        ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        topRated: true,
      },
    ]);
  }

  getCourseById(Id) {
    return this.http.get(`courses/getById/${Id}`);
  }

  createCourse(course) {
    return this.http.post('courses/create', course);
  }

  updateCourse(course) {
    return this.http.put('courses/update', course);
  }

  removeCourse(course) {
    return this.http.delete('courses/delete', course);
  }
}
