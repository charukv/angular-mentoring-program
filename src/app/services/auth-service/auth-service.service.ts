import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  login() {
    localStorage.setItem(
      "token",
      JSON.stringify({ token: new Date().getTime(), user: "charukv" })
    );
  }

  logout() {
    localStorage.removeItem("token");
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  getUserInfo() {
    let info = JSON.parse(localStorage.getItem('token'))
    return info ? info.user : null;
  }
}
