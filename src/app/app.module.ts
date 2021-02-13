import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CourseCreatePageComponent } from './components/courses-page/course-create-page/course-create-page.component';
import { DeletePopupComponent } from './common/delete-popup/delete-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthPageComponent,
    CoursesPageComponent,
    CourseCreatePageComponent,
    DeletePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
