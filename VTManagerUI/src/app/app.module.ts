import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './layouts/admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import { NotificationDropdownComponent } from './components/dropdowns/notification-dropdown/notification-dropdown.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { UnconfirmedOrdersComponent } from './views/admin/orders/unconfirmed-orders/unconfirmed-orders.component';
import { DeletedOrdersComponent } from './views/admin/orders/deleted-orders/deleted-orders.component';
import { CompletedOrdersComponent } from './views/admin/orders/completed-orders/completed-orders.component';
import { DeliveriesViaCsvFilesComponent } from './views/admin/orders/deliveries-via-csv-files/deliveries-via-csv-files.component';
import { ColliOrdersTomorrowComponent } from './views/admin/orders/colli-orders-tomorrow/colli-orders-tomorrow.component';
import { SupplierOverviewComponent } from './views/admin/orders/supplier-overview/supplier-overview.component';
import { OrderListComponent } from './views/admin/orders/order-list/order-list.component';
import { StatisticsComponent } from './views/admin/orders/statistics/statistics.component';
import {MatTableModule} from "@angular/material/table";
import {OrdersComponent} from "./views/admin/orders/orders/orders.component";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    OrdersComponent,
    UserDropdownComponent,
    NotificationDropdownComponent,
    UnconfirmedOrdersComponent,
    DeletedOrdersComponent,
    CompletedOrdersComponent,
    DeliveriesViaCsvFilesComponent,
    ColliOrdersTomorrowComponent,
    SupplierOverviewComponent,
    OrderListComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTableModule,
    MatCheckboxModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
