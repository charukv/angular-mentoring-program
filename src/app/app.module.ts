import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./common/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { TextFieldModule } from '@angular/cdk/text-field';

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
import { CoursePlateDirective } from "./directives/course-plate/course-plate.directive";
import { DurationPipe } from './pipes/duration-pipe/duration.pipe';
import { OrderByPipe } from './pipes/order-by-pipe/order-by.pipe';
import { FilterPipe } from './pipes/filter-pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthPageComponent,
    CoursesPageComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesEditCreatePageComponent,
    CoursePlateDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    TextFieldModule
  ],
  providers: [OrderByPipe, FilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
