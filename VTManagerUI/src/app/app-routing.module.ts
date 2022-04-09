
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import {NavigationComponent} from "./layouts/admin/navigation/navigation.component";
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
import {
  AddProductRequestComponent
} from "./views/admin/catalog/wish-list/add-product-request/add-product-request.component";
import {CustomersComponent} from "./views/admin/customers/customers/customers.component";
import {DeletedCustomersComponent} from "./views/admin/customers/deleted-customers/deleted-customers.component";
import {CustomerTypeComponent} from "./views/admin/customers/customer-type/customer-type.component";
import {SuppliersComponent} from "./views/admin/suppliers/suppliers/suppliers.component";
import {DeletedSuppliersComponent} from "./views/admin/suppliers/deleted-suppliers/deleted-suppliers.component";
import {SupplierTypeComponent} from "./views/admin/suppliers/supplier-type/supplier-type.component";
import {FranchisersComponent} from "./views/admin/franchisers/franchisers/franchisers.component";
import {DeletedFranchisersComponent} from "./views/admin/franchisers/deleted-franchisers/deleted-franchisers.component";
import {FranchiserTypeComponent} from "./views/admin/franchisers/franchiser-type/franchiser-type.component";
import {AccountManagersComponent} from "./views/admin/account-managers/account-managers/account-managers.component";
import {
  DeletedAccountManagersComponent
} from "./views/admin/account-managers/deleted-account-managers/deleted-account-managers.component";
import {ChatsComponent} from "./views/admin/chats/chats.component";
import {ComplaintsComponent} from "./views/admin/complaints/complaints.component";
import {ProfilesComponent} from "./views/admin/settings/profiles/profiles.component";
import {ConfigurationsComponent} from "./views/admin/settings/configurations/configurations.component";
import {UsersComponent} from "./views/admin/settings/users/users.component";
import {LogComponent} from "./views/admin/settings/log/log.component";
import {SystemInfoComponent} from "./views/admin/settings/system-info/system-info.component";
import {AdminComponent} from "./layouts/admin/admin.component";
import {OrderDeatailsComponent} from "./views/admin/orders/orders/order-deatails/order-deatails.component";
import {
  OrderListDetailsComponent
} from "./views/admin/orders/order-list/order-list-details/order-list-details.component";
import {
  SuplierOrderDetailsComponent
} from "./views/admin/orders/orders/suplier-order-details/suplier-order-details.component";
import {CsvContentComponent} from "./views/admin/orders/deliveries-via-csv-files/csv-content/csv-content.component";
import {
  NewProductDetailsComponent
} from "./views/admin/catalog/products/new-product-details/new-product-details.component";
const routes: Routes = [
  // admin views
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "orders/orders", component: OrdersComponent },
      { path: "orders/orders/:id", component: OrderDeatailsComponent},
      { path: "orders/orders/:id/:id", component: SuplierOrderDetailsComponent},
      { path: "orders/deleted-orders", component: DeletedOrdersComponent},
      { path: "orders/colli-orders-tomorrow", component: ColliOrdersTomorrowComponent},
      { path: "orders/completed-orders", component: CompletedOrdersComponent},
      { path: "orders/order-list", component: OrderListComponent},
      { path: "orders/order-list/:id", component: OrderListDetailsComponent},
      { path: "orders/deliveries-via-csv-files", component: DeliveriesViaCsvFilesComponent},
      { path: "orders/deliveries-via-csv-files/:id", component: CsvContentComponent},
      { path: "orders/statistics", component: StatisticsComponent},
      { path: "orders/supplier-overview", component: SupplierOverviewComponent},
      { path: "orders/unconfirmed-orders", component: UnconfirmedOrdersComponent},
      { path: "catalog/products", component: ProductsComponent},
      { path: "catalog/products/new", component: NewProductDetailsComponent},
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
      { path: "catalog/wish-list/:id", component: AddProductRequestComponent},
      { path: "catalog/products/:id", component:ProductDetailsComponent},
      { path: "catalog/product-invitations-franchise/:id", component:EditProductsInvitationsFranchiseComponent},
      { path: "catalog/product-types/:id", component: ProductTypesDetailsComponent},
      { path: "catalog/offers/:id", component: OffersDetailsComponent},
      { path: "customers/customers", component: CustomersComponent},
      { path: "customers/deleted-customers", component: DeletedCustomersComponent},
      { path: "customers/customer-type", component: CustomerTypeComponent},
      { path: "suppliers/suppliers", component: SuppliersComponent},
      { path: "suppliers/deleted-suppliers", component: DeletedSuppliersComponent},
      { path: "suppliers/supplier-type", component: SupplierTypeComponent},
      { path: "franchisers/franchisers", component: FranchisersComponent},
      { path: "franchisers/deleted-franchisers", component: DeletedFranchisersComponent},
      { path: "franchisers/franchiser-type", component: FranchiserTypeComponent},
      { path: "account-managers/account-managers", component: AccountManagersComponent},
      { path: "account-managers/deleted-account-managers", component: DeletedAccountManagersComponent},
      { path: "chats", component: ChatsComponent},
      { path: "complaints", component: ComplaintsComponent},
      { path: "settings/profiles", component: ProfilesComponent},
      { path: "settings/users", component: UsersComponent},
      { path: "settings/configurations", component: ConfigurationsComponent},
      { path: "settings/log", component: LogComponent},
      { path: "settings/system-info", component: SystemInfoComponent},
      { path: "orders", redirectTo: "orders/orders", pathMatch: "full" },
      { path: "catalog", redirectTo: "catalog/products", pathMatch: "full" },
      { path: "customers", redirectTo: "customers/customers", pathMatch: "full" },
      { path: "suppliers", redirectTo: "suppliers/suppliers", pathMatch: "full" },
      { path: "franchisers", redirectTo: "franchisers/franchisers", pathMatch: "full" },
      { path: "settings", redirectTo: "settings/profiles", pathMatch: "full" },
      { path: "account-managers", redirectTo: "account-managers/account-managers", pathMatch: "full" },
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
