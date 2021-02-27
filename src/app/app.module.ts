import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./common/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthPageComponent } from "./components/auth-page/auth-page.component";
import { CoursesPageComponent } from "./components/courses-page/courses-page.component";
import { CoursesListComponent } from "./components/courses-page/courses-list/courses-list.component";
import { CoursesListItemComponent } from "./components/courses-page/courses-list/courses-list-item/courses-list-item.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { CoursesEditCreatePageComponent } from './components/courses-page/courses-edit-create-page/courses-edit-create-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    CoursesPageComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesEditCreatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
