import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';


const routes: Routes = [
  { path: 'login', component: AuthPageComponent },
  { path: 'courses', component: CoursesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
