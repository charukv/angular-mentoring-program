import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { map } from "rxjs/operators";
import { User } from "src/app/interfaces/user-interface/user-interface";
import { AuthServiceService } from "../../services/auth-service/auth-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {

  userInfo: User;
  isAuth: boolean;

  constructor(
    private _authServiceService: AuthServiceService,
    private router: Router
  ) {
    this._authServiceService.userInfo$
      .subscribe((userInfo) => {
        if (userInfo) {
          userInfo.fullName = `${userInfo.name.first} ${userInfo.name.last}`;
          this.userInfo = userInfo;
        } else {
          this.userInfo = null;
        }
      });
    this._authServiceService.authData$
      .subscribe((authInfo) => {
        this.isAuth = authInfo;
      });
  }

  ngOnInit(): void {
    this.getUserInfo(JSON.parse(localStorage.getItem('token')));
  }

  getUserInfo(token) {
    if (token) {
      this._authServiceService.getUserInfo(token)
        .subscribe((response: User) => {
          console.log(response);
        })
    }
  }

  logout() {
    this._authServiceService.logout();
    this.router.navigate(["/login"]);
  }
}

