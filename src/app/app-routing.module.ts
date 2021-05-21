import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./common/not-found/not-found.component";

import { AuthPageComponent } from "./components/auth-page/auth-page.component";
import { CoursesEditCreatePageComponent } from "./components/courses-page/courses-edit-create-page/courses-edit-create-page.component";
import { CoursesPageComponent } from "./components/courses-page/courses-page.component";
import { AuthGuardGuard } from "./guards/auth-guard.guard";
import { IsLoggedInGuard } from "./guards/is-logged-in.guard";

const routes: Routes = [
  { path: "login", component: AuthPageComponent, canActivate: [IsLoggedInGuard] },
  { path: "courses", component: CoursesPageComponent, canActivate: [AuthGuardGuard] },
  { path: "courses/new", component: CoursesEditCreatePageComponent, canActivate: [AuthGuardGuard] },
  { path: "courses/:id", component: CoursesEditCreatePageComponent, canActivate: [AuthGuardGuard] },
  { path: "not-found", component: NotFoundComponent },
  { path: "", redirectTo: "courses", pathMatch: "full" },
  { path: "**", redirectTo: "not-found", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
