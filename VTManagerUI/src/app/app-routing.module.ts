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
import {OrderDeatailsComponent} from "./views/admin/orders/orders/order-deatails/order-deatails.component";
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
      { path: "orders/orders/:no", component: OrderDeatailsComponent},
      { path: "orders", redirectTo: "orders/orders", pathMatch: "full" },
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
