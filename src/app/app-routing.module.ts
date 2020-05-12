import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ROUTING_CONSTANTS } from "src/app/@core/constants/routing.constants";

const routes: Routes = [
    { path: ROUTING_CONSTANTS.MARKET_PAGE, loadChildren: () => import("@modules/main-list/main-list-routing.module").then((m) => m.MainListRoutingModule) },
    { path: ROUTING_CONSTANTS.ROOT, loadChildren: () => import("@modules/main-list/main-list-routing.module").then((m) => m.MainListRoutingModule) },
    { path: ROUTING_CONSTANTS.VENDOR_PAGE_ROOT, loadChildren: () => import("@modules/vendor/vendor-routing.module").then((m) => m.VendorRoutingModule) },
    { path: ROUTING_CONSTANTS.CART_PAGE_ROOT, loadChildren: () => import("@modules/cart/cart-routing.module").then((m) => m.CartRoutingModule) },
    { path: ROUTING_CONSTANTS.ABOUT_PAGE_ROOT, loadChildren: () => import("@modules/about/about-routing.module").then((m) => m.AboutRoutingModule) },
    {
        path: ROUTING_CONSTANTS.TERMS_AND_CONDITIONS,
        loadChildren: () => import("@modules/terms-and-conditions/terms-and-conditions-routing.module").then((m) => m.TermsAndConditionsRoutingModule),
    },
    {
        path: ROUTING_CONSTANTS.PRIVACY_POLICY,
        loadChildren: () => import("@modules/privacy-policy/privacy-policy-routing.module").then((m) => m.PrivacyPolicyRoutingModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
