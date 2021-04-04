import { NgModule } from "@angular/core";
import { ActionPopupComponent } from "./action-popup/action-popup.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, ActionPopupComponent, NotFoundComponent],
    exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent, ActionPopupComponent, NotFoundComponent],
    imports: [MatButtonModule, BrowserModule, CommonModule]
})

export class SharedModule {

}