import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";
import { setUser } from "src/app/actions/user.actions";
import { User } from "src/app/interfaces/user-interface/user-interface";
import { AuthServiceService } from "../../services/auth-service/auth-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {

  userInfo: User;

  fullName: string = null;
  isAuth: boolean;
  token$: Observable<string>;
  user$: Observable<User>;
  languages: string[] = ['eng', 'ukr'];

  constructor(
    private _authServiceService: AuthServiceService,
    private router: Router,
    private store: Store<{ token: string, user: User }>,
    public translate: TranslateService
  ) {
    this.user$ = store.select('user')
    this.token$ = store.select('token');
    this.token$.subscribe(token => {
      this.isAuth = !!token;
    });
    this.user$.subscribe(user => {
      if (user) {
        this.fullName = `${user.name.first} ${user.name.last}`;
        this.userInfo = user;
      } else {
        this.userInfo = null;
      }
    });
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this._authServiceService.getUserInfo()
      .subscribe((userData: User) => {
        this.store.dispatch(setUser({ user: userData }));
      })
  }

  logout() {
    this._authServiceService.logout();
    this.router.navigate(["/login"]);
  }
}

