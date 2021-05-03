import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Observable, of } from "rxjs";
import { remove } from "src/app/actions/auth.actions";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  serverUrl = 'http://localhost:3004';
  userData = new BehaviorSubject<any>(null);
  userInfo$ = this.userData.asObservable();
  authData$ = new BehaviorSubject<any>(false);

  token$: Observable<string>;
  isAuth: boolean;
  token: string;

  constructor(private http: HttpClient,
    private store: Store<{ token: string }>) {
    this.token$ = store.select('token');
    this.token$.subscribe(token => {
      this.isAuth = !!token;
      this.token = token;
    })
  }

  login(user) {
    return this.http.post(`${this.serverUrl}/auth/login`, user)
  }

  logout() {
    this.store.dispatch(remove());
  }

  isAuthenticated() {
    return of(this.isAuth);
  }

  getToken() {
    return this.token;
  }

  getUserInfo() {
    if (this.token) {
      return this.http.post(`${this.serverUrl}/auth/userinfo`, { token: this.token });
    } else {
      return of(null);
    }
  }
}
