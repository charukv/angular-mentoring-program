import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { User } from "src/app/interfaces/user-interface/user-interface";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  serverUrl = 'http://localhost:3004';
  userData = new BehaviorSubject<any>(null);
  userInfo$ = this.userData.asObservable();
  authData$ = new BehaviorSubject<any>(false);

  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(`${this.serverUrl}/auth/login`, user)
  }

  logout() {
    localStorage.removeItem("token");
    this.userData.next(null);
  }

  isAuthenticated() {
    const isAuth = !!localStorage.getItem('token')
    this.authData$.next(isAuth);
    return of(isAuth);
  }

  getToken() {
    let tokenData = JSON.parse(localStorage.getItem('token'))
    if (tokenData) {
      return tokenData.token;
    }
  }

  getUserInfo(token) {
    return this.http.post(`${this.serverUrl}/auth/userinfo`, token)
      .pipe(switchMap((userData: User) => {
        this.userData.next(userData);
        return this.userInfo$;
      }));
  }
}
