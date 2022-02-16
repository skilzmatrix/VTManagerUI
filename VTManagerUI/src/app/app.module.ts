
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
import { LoginComponent } from './views/auth/login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSelectModule} from "@angular/material/select";
import {StylePaginatorDirective} from "./shared/style-paginator.directive";
import {MultiSelectModule} from "primeng/multiselect";
import { OrderDeatailsComponent } from './views/admin/orders/orders/order-deatails/order-deatails.component';
import { ProductsComponent } from './views/admin/catalog/products/products.component';
import { RemovedProductsComponent } from './views/admin/catalog/removed-products/removed-products.component';
import { CustomerSpecificProductsComponent } from './views/admin/catalog/customer-specific-products/customer-specific-products.component';
import { ProductsInvitationsFranchiseComponent } from './views/admin/catalog/products-invitations-franchise/products-invitations-franchise.component';
import { CategoriesComponent } from './views/admin/catalog/categories/categories.component';
import { ProductTypesComponent } from './views/admin/catalog/product-types/product-types.component';
import { OffersComponent } from './views/admin/catalog/offers/offers.component';
import { PriceMarginsFranchiseComponent } from './views/admin/catalog/price-margins-franchise/price-margins-franchise.component';
import { WishListComponent } from './views/admin/catalog/wish-list/wish-list.component';
import { CatalogComponent } from './views/admin/catalog/catalog.component';
import { FranchiseSpecificProductsComponent } from './views/admin/catalog/franchise-specific-products/franchise-specific-products.component';
import { ProductDetailsComponent } from './views/admin/catalog/products/product-details/product-details.component';
import {ProductsService} from "./services/products.service";
import {MatTabsModule} from "@angular/material/tabs";
import {MatChipsModule} from "@angular/material/chips";
import {EditorModule} from "primeng/editor";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {CheckboxModule} from "primeng/checkbox";
import { EditProductsInvitationsFranchiseComponent } from './views/admin/catalog/products-invitations-franchise/edit-products-invitations-franchise/edit-products-invitations-franchise.component';
import { ProductTypesDetailsComponent } from './views/admin/catalog/product-types/product-types-details/product-types-details.component';
import { OffersDetailsComponent } from './views/admin/catalog/offers/offers-details/offers-details.component';
import { PriceMarginFranchiseDetailsComponent } from './views/admin/catalog/price-margins-franchise/price-margin-franchise-details/price-margin-franchise-details.component';
import { AddProductRequestComponent } from './views/admin/catalog/wish-list/add-product-request/add-product-request.component';


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
    StatisticsComponent,
    StylePaginatorDirective,
    LoginComponent,
    OrderDeatailsComponent,
    OrderDeatailsComponent,
    ProductsComponent,
    RemovedProductsComponent,
    CustomerSpecificProductsComponent,
    ProductsInvitationsFranchiseComponent,
    CategoriesComponent,
    ProductTypesComponent,
    OffersComponent,
    PriceMarginsFranchiseComponent,
    WishListComponent,
    CatalogComponent,
    FranchiseSpecificProductsComponent,
    ProductDetailsComponent,
    EditProductsInvitationsFranchiseComponent,
    ProductTypesDetailsComponent,
    OffersDetailsComponent,
    PriceMarginFranchiseDetailsComponent,
    AddProductRequestComponent,

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
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MultiSelectModule,
    MatTabsModule,
    MatChipsModule,
    EditorModule,
    InputTextModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    CheckboxModule,
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
