import { NgModule } from "@angular/core";
import { ActionPopupComponent } from "./action-popup/action-popup.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerOverlayComponent } from './spinner/spinner-overlay/spinner-overlay.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, ActionPopupComponent, SpinnerComponent, SpinnerOverlayComponent],
    exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent, ActionPopupComponent, SpinnerOverlayComponent],
    imports: [MatButtonModule, BrowserModule, CommonModule]
})

export class SharedModule {

}