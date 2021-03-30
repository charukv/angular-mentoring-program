import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthPageComponent } from "./components/auth-page/auth-page.component";
import { CoursesEditCreatePageComponent } from "./components/courses-page/courses-edit-create-page/courses-edit-create-page.component";
import { CoursesPageComponent } from "./components/courses-page/courses-page.component";

const routes: Routes = [
  { path: "login", component: AuthPageComponent },
  { path: "courses", component: CoursesPageComponent },
  { path: "courses/new", component: CoursesEditCreatePageComponent},
  { path: "courses/:id", component: CoursesEditCreatePageComponent},
  { path: "**", redirectTo: "login", pathMatch: "full" },
  { path: "", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
