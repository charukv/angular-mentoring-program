import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { set } from "src/app/actions/auth.actions";
import { setUser } from "src/app/actions/user.actions";
import { User } from "src/app/interfaces/user-interface/user-interface";
import { AuthServiceService } from "../../services/auth-service/auth-service.service";

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth-page.component.html",
  styleUrls: ["./auth-page.component.scss"],
})
export class AuthPageComponent implements OnInit {

  login: string;
  password: string;

  constructor(
    private _authServiceService: AuthServiceService,
    private router: Router,
    private store: Store<{ token: string, user: User }>
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._authServiceService.login({ login: this.login, password: this.password })
      .subscribe((response: any) => {
        this.store.dispatch(set({ token: response.token }))
        this.getUserInfo();
      });
  }

  getUserInfo() {
    this._authServiceService.getUserInfo()
      .subscribe((response: User) => {
        this.store.dispatch(setUser({ user: response }));
        this.router.navigate(['/courses']);
      })
  }
}
