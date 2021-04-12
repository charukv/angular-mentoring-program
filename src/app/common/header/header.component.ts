import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthServiceService } from "../../services/auth-service/auth-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    private _authServiceService: AuthServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserInfo(JSON.parse(localStorage.getItem('token')));
  }

  getUserInfo(token) {
    if (token) {
      this._authServiceService.getUserInfo(token)
        .subscribe((response) => {
          console.log(response);
        })
    }
  }

  logout() {
    this._authServiceService.logout();
    this.router.navigate(["/login"]);
  }

  isAuthenticated() {
    return this._authServiceService.isAuthenticated();
  }
}

