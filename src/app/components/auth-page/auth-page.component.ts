import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthServiceService } from "../../services/auth-service/auth-service.service";

@Component({
  selector: "app-auth-page",
  templateUrl: "./auth-page.component.html",
  styleUrls: ["./auth-page.component.scss"],
})
export class AuthPageComponent implements OnInit {
  constructor(
    private _authServiceService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this._authServiceService.login();
    console.log('logged in successfully');
    this.router.navigate(['/courses'])
  }
}
