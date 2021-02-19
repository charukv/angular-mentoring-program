import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './common/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CourseCreatePageComponent } from './components/courses-page/course-create-page/course-create-page.component';
import { CoursesListComponent } from './components/courses-page/courses-list/courses-list.component';
import { CoursesListItemComponent } from './components/courses-page/courses-list/courses-list-item/courses-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    CoursesPageComponent,
    CourseCreatePageComponent,
    CoursesListComponent,
    CoursesListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
