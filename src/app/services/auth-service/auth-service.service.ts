import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  serverUrl = 'http://localhost:3004';

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(`${this.serverUrl}/auth/login`, user);
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

  getToken() {
    let tokenData = JSON.parse(localStorage.getItem('token'))
    if (tokenData) {
      return tokenData.token;
    }
  }

  getUserInfo(token) {
    return this.http.post(`${this.serverUrl}/auth/userinfo`, token);
  }
}
