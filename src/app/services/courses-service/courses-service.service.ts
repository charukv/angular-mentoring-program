import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CoursesServiceService {
  coursesList = [
    {
      id: 1,
      name: "name tag",
      date: new Date(),
      length: 28,
      description: `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim 
      ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      isTopRated: true,
    },
    {
      id: 2,
      name: "name tag",
      date: new Date("10/10/2030"),
      length: 97,
      description: `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim 
      ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      isTopRated: false,
    },
    {
      id: 3,
      name: "name tag",
      date: new Date("02/28/2021"),
      length: 135,
      description: `Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim 
      ad minim veniam, quis nostrud exercitation ullamco laboris 
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
      sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      isTopRated: true,
    },
  ]
  serverUrl = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  getCourses(start, count, textFragment): Observable<any> {
    let params = { start, count, textFragment }
    return this.http.get(`${this.serverUrl}/courses`, { params });
  }

  getCourseById(id) {
    return this.http.get(`${this.serverUrl}/courses/${id}`);
  }

  createCourse(course) {
    return this.http.post(`${this.serverUrl}/courses`, course);
  }

  updateCourse(course) {
    return this.http.patch(`${this.serverUrl}/courses/${course.id}`, course);
  }

  removeCourse(id) {
    return this.http.delete(`${this.serverUrl}/courses/${id}`);
  }

  getAllAuthors() {
    return this.http.get(`${this.serverUrl}/authors`);
  }
}
