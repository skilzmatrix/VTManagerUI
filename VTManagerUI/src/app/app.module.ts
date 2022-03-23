
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
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
import { NavigationComponent } from './layouts/admin/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { CustomersComponent } from './views/admin/customers/customers/customers.component';
import { DeletedCustomersComponent } from './views/admin/customers/deleted-customers/deleted-customers.component';
import { CustomerTypeComponent } from './views/admin/customers/customer-type/customer-type.component';
import { SuppliersComponent } from './views/admin/suppliers/suppliers/suppliers.component';
import { DeletedSuppliersComponent } from './views/admin/suppliers/deleted-suppliers/deleted-suppliers.component';
import { SupplierTypeComponent } from './views/admin/suppliers/supplier-type/supplier-type.component';
import { FranchisersComponent } from './views/admin/franchisers/franchisers/franchisers.component';
import { DeletedFranchisersComponent } from './views/admin/franchisers/deleted-franchisers/deleted-franchisers.component';
import { FranchiserTypeComponent } from './views/admin/franchisers/franchiser-type/franchiser-type.component';
import { AccountManagersComponent } from './views/admin/account-managers/account-managers/account-managers.component';
import { DeletedAccountManagersComponent } from './views/admin/account-managers/deleted-account-managers/deleted-account-managers.component';
import { ChatsComponent } from './views/admin/chats/chats.component';
import { ComplaintsComponent } from './views/admin/complaints/complaints.component';
import { SettingsComponent } from './views/admin/settings/settings.component';
import { ProfilesComponent } from './views/admin/settings/profiles/profiles.component';
import { UsersComponent } from './views/admin/settings/users/users.component';
import { ConfigurationsComponent } from './views/admin/settings/configurations/configurations.component';
import { LogComponent } from './views/admin/settings/log/log.component';
import { SystemInfoComponent } from './views/admin/settings/system-info/system-info.component';
import { PageHeadComponent } from './components/page-head/page-head.component';
import { PageBodyComponent } from './components/page-body/page-body.component';
import { TableComponent } from './components/table/table.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import { AdminComponent } from './layouts/admin/admin.component';
import { NavBarComponent } from './layouts/admin/nav-bar/nav-bar.component';
import {MatSortModule} from "@angular/material/sort";
import { SideBarComponent } from './layouts/admin/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
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
    NavigationComponent,
    CustomersComponent,
    DeletedCustomersComponent,
    CustomerTypeComponent,
    SuppliersComponent,
    DeletedSuppliersComponent,
    SupplierTypeComponent,
    FranchisersComponent,
    DeletedFranchisersComponent,
    FranchiserTypeComponent,
    AccountManagersComponent,
    DeletedAccountManagersComponent,
    ChatsComponent,
    ComplaintsComponent,
    SettingsComponent,
    ProfilesComponent,
    UsersComponent,
    ConfigurationsComponent,
    LogComponent,
    SystemInfoComponent,
    PageHeadComponent,
    PageBodyComponent,
    TableComponent,
    AdminComponent,
    NavBarComponent,
    SideBarComponent,
    OrderDeatailsComponent,
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
        LayoutModule,
        MatToolbarModule,
        MatListModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSortModule,
    ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
