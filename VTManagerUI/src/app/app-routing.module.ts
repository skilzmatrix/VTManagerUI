
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import {AdminLayoutComponent} from "./layouts/admin/admin-layout/admin-layout.component";
// import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import {DashboardComponent} from "./views/admin/dashboard/dashboard.component";
import {OrdersComponent} from "./views/admin/orders/orders/orders.component";
import {DeletedOrdersComponent} from "./views/admin/orders/deleted-orders/deleted-orders.component";
import {ColliOrdersTomorrowComponent} from "./views/admin/orders/colli-orders-tomorrow/colli-orders-tomorrow.component";
import {CompletedOrdersComponent} from "./views/admin/orders/completed-orders/completed-orders.component";
import {OrderListComponent} from "./views/admin/orders/order-list/order-list.component";
import {StatisticsComponent} from "./views/admin/orders/statistics/statistics.component";
import {SupplierOverviewComponent} from "./views/admin/orders/supplier-overview/supplier-overview.component";
import {UnconfirmedOrdersComponent} from "./views/admin/orders/unconfirmed-orders/unconfirmed-orders.component";
import {
  DeliveriesViaCsvFilesComponent
} from "./views/admin/orders/deliveries-via-csv-files/deliveries-via-csv-files.component";
import {LoginComponent} from "./views/auth/login/login.component";
import {ProductsComponent} from "./views/admin/catalog/products/products.component";
import {RemovedProductsComponent} from "./views/admin/catalog/removed-products/removed-products.component";
import {CustomerSpecificProductsComponent} from "./views/admin/catalog/customer-specific-products/customer-specific-products.component";
import {ProductsInvitationsFranchiseComponent} from "./views/admin/catalog/products-invitations-franchise/products-invitations-franchise.component";
import {CategoriesComponent} from "./views/admin/catalog/categories/categories.component";
import {ProductTypesComponent} from "./views/admin/catalog/product-types/product-types.component";
import {OffersComponent} from "./views/admin/catalog/offers/offers.component";
import {PriceMarginsFranchiseComponent} from "./views/admin/catalog/price-margins-franchise/price-margins-franchise.component";
import{WishListComponent} from "./views/admin/catalog/wish-list/wish-list.component";
import {FranchiseSpecificProductsComponent} from "./views/admin/catalog/franchise-specific-products/franchise-specific-products.component";
import {ProductDetailsComponent} from "./views/admin/catalog/products/product-details/product-details.component";
import {
  EditProductsInvitationsFranchiseComponent
} from "./views/admin/catalog/products-invitations-franchise/edit-products-invitations-franchise/edit-products-invitations-franchise.component";
import {
  ProductTypesDetailsComponent
} from "./views/admin/catalog/product-types/product-types-details/product-types-details.component";
import {OffersDetailsComponent} from "./views/admin/catalog/offers/offers-details/offers-details.component";
import {
  PriceMarginFranchiseDetailsComponent
} from "./views/admin/catalog/price-margins-franchise/price-margin-franchise-details/price-margin-franchise-details.component";
const routes: Routes = [
  // admin views
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "orders/orders", component: OrdersComponent },
      { path: "orders/deleted-orders", component: DeletedOrdersComponent},
      { path: "orders/colli-orders-tomorrow", component: ColliOrdersTomorrowComponent},
      { path: "orders/completed-orders", component: CompletedOrdersComponent},
      { path: "orders/order-list", component: OrderListComponent},
      { path: "orders/deliveries-via-csv-files", component: DeliveriesViaCsvFilesComponent},
      { path: "orders/statistics", component: StatisticsComponent},
      { path: "orders/supplier-overview", component: SupplierOverviewComponent},
      { path: "orders/unconfirmed-orders", component: UnconfirmedOrdersComponent},
      { path: "catalog/products", component: ProductsComponent},
      { path: "catalog/categories", component: CategoriesComponent},
      { path: "catalog/removed-products", component: RemovedProductsComponent},
      { path: "catalog/customer-specific-products", component: CustomerSpecificProductsComponent},
      { path: "catalog/product-invitations-franchise", component: ProductsInvitationsFranchiseComponent},
      { path: "catalog/franchise-specific-products", component: FranchiseSpecificProductsComponent},
      { path: "catalog/product-types", component: ProductTypesComponent},
      { path: "catalog/offers", component: OffersComponent},
      { path: "catalog/price-margins-franchise", component: PriceMarginsFranchiseComponent},
      { path: "catalog/price-margins-franchise/:id", component: PriceMarginFranchiseDetailsComponent},
      { path: "catalog/wish-list", component: WishListComponent},
      { path: "catalog/products/:id", component:ProductDetailsComponent},
      { path: "catalog/product-invitations-franchise/:id", component:EditProductsInvitationsFranchiseComponent},
      { path: "catalog/product-types/:id", component: ProductTypesDetailsComponent},
      { path: "catalog/offers/:id", component: OffersDetailsComponent},

      { path: "orders", redirectTo: "orders/orders", pathMatch: "full" },
      { path: "catalog", redirectTo: "catalog/products", pathMatch: "full" },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],

  },
  // auth views
  // {
  //   path: "auth",
  //   component: AuthComponent,
  //   children: [
  //     { path: "login", component: LoginComponent },
  //     { path: "register", component: RegisterComponent },
  //     { path: "", redirectTo: "login", pathMatch: "full" },
  //   ],
  // },
  // no layout views
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
