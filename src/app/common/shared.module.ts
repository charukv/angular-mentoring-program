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
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TranslateLoader } from "@ngx-translate/core";
import { TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, ActionPopupComponent, SpinnerComponent, SpinnerOverlayComponent],
    exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent, ActionPopupComponent, SpinnerOverlayComponent],
    imports: [
        MatButtonModule,
        BrowserModule,
        CommonModule,
        MatSelectModule,
        MatButtonToggleModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            defaultLanguage: 'en'
        })
    ]
})

export class SharedModule {

}