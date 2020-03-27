import { AngularFirestoreModule } from "@angular/fire/firestore";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgModule, DEFAULT_CURRENCY_CODE } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { FooterComponent } from "./globalComponents/footer/footer.component";
import { MainListComponent } from "./modules/main-list/main-list.component";
import { TopBannerComponent } from "./globalComponents/top-banner/top-banner.component";
import { SearchLocationComponent } from "./globalComponents/search-location/search-location.component";
import { SearchSmartItemsComponent } from "./globalComponents/search-smart-items/search-smart-items.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

// ANGULAR MATERIAL MODULES
import { CardVendorComponent } from "./globalComponents/card-vendor/card-vendor.component";
import { DbServiceService } from "src/app/@features/services/db-service.service";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { VendorListingsComponent } from "./modules/vendor-listings/vendor-listings.component";
import { CardListingComponent } from "./modules/card-listing/card-listing.component";

// NEBULAR MODULES
import {
    NbThemeModule,
    NbLayoutModule,
    NbAutocompleteModule,
    NbCardModule,
    NbOverlayModule,
    NbDialogModule,
    NbAutocompleteDirective,
    NbInputModule,
    NbFormFieldModule,
    NbOptionModule,
    NbCdkAdapterModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbSpinnerModule,
    NbContextMenuModule,
    NbButtonModule,
    NbMenuService,
    NbMenuModule,
    NbIconModule,
    NbPopoverModule,
    NbSelectModule,
    NbBadgeModule
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { TopheaderComponent } from "./globalComponents/topheader/topheader.component";
import { CartComponent } from "./modules/cart/cart-page/cart.component";
import { VendorSummaryHeaderComponent } from './modules/vendor-listings/vendor-summary-header/vendor-summary-header.component';
import { ListListingsComponent } from './globalComponents/list-listings/list-listings.component';

//Injectables

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        MainListComponent,
        TopBannerComponent,
        SearchLocationComponent,
        SearchSmartItemsComponent,
        CardVendorComponent,
        CardListingComponent,
        VendorListingsComponent,
        TopheaderComponent,
        CartComponent,
        VendorSummaryHeaderComponent,
        ListListingsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        //Nebular
        NbThemeModule.forRoot({ name: "corporate" }),
        NbLayoutModule,
        NbEvaIconsModule,
        NbAutocompleteModule,
        NbCardModule,
        NbOverlayModule,
        NbDialogModule,
        NbInputModule,
        NbFormFieldModule,
        NbOptionModule,
        NbTabsetModule,
        NbRouteTabsetModule,
        NbSpinnerModule,
        NbContextMenuModule,
        NbButtonModule,
        NbMenuModule.forRoot(),
        NbIconModule,
        NbPopoverModule,
        NbSelectModule,
        NbBadgeModule
    ],
    providers: [DbServiceService, NbAutocompleteDirective, NbMenuService, CookieService, { provide: DEFAULT_CURRENCY_CODE, useValue: "EUR" }],
    bootstrap: [AppComponent]
})
export class AppModule {}
