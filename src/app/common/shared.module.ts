import { NgModule } from "@angular/core";
import { ActionPopupComponent } from "./action-popup/action-popup.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { FakeLogoComponent } from './fake-logo/fake-logo.component';

@NgModule({
    declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, ActionPopupComponent],
    exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent, ActionPopupComponent]
})

export class SharedModule {

}