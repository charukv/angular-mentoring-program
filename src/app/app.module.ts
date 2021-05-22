import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SharedModule } from "./common/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { TextFieldModule } from '@angular/cdk/text-field';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { OverlayModule } from '@angular/cdk/overlay'
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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { StoreModule } from '@ngrx/store';
import { coursesReducer } from './reducers/courses.reducer';
import { authReducer } from "./reducers/auth.reducer";
import { userReducer } from "./reducers/user.reducer";
import { ReactiveFormsModule } from '@angular/forms';
import { DateInputComponent } from './custom-inputs/date-input/date-input.component';
import { DurationInputComponent } from './custom-inputs/duration-input/duration-input.component';
import { AuthorsInputComponent } from './custom-inputs/authors-input/authors-input.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateLoader } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    FilterPipe,
    DateInputComponent,
    DurationInputComponent,
    AuthorsInputComponent
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
    TextFieldModule,
    OverlayModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    StoreModule.forRoot({ courses: coursesReducer, token: authReducer, user: userReducer }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [OrderByPipe, FilterPipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
