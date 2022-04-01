import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ProductsService} from "../../../../../services/products.service";
import {ProductList} from "../../../../../interfaces/products";
import {FormControl} from "@angular/forms";
import {MatChipInputEvent} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {OrderList, OrdersInterface} from "../../../../../interfaces/orders";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {OrdersService} from "../../../../../services/orders.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [OrdersService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],


})
export class ProductDetailsComponent implements OnInit {
  public id: string = '';
  private ProductDetails: any;
  toppings          = new FormControl();
  toppingList       = ['en', 'fr', 'es'];

  availableColumns: any                            = ['customer', 'business', 'postcode', 'order_date', 'date_of_delivery', 'delivery'];
  columnsToDisplay                                 = ['customer', 'business', 'postcode', 'order_date', 'date_of_delivery', 'delivery',];
  exHeadFill                                       = false;
  expandedElement: OrdersInterface | null          = null;
  listOfOrder: MatTableDataSource<OrdersInterface> = new MatTableDataSource();
  selection                                        = new SelectionModel<OrdersInterface>(true, []);
  addOnBlur                                        = true;
  cities                                           = ['en', 'fr', 'es'];
  selectedCity                                     = [];
  selectedValues                                   = [];
  selectedCities                                   = [];
  values2                                          = [];
  text2                                            = "";
  langTitle=['En', 'Fr', 'Es'];
  selectedlangTitle=[];
  value='Rund ribeye geportioneerd 5x200gram';


  @ViewChild(MatPaginator, {static: true}) paginator?: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | null         = null;


  constructor(private ordersService: OrdersService,
              private route: ActivatedRoute,
              private router: Router,
              private productService: ProductsService) {

  }

  openTab = 1;
  checked=true;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(this.listOfOrder);
    this.listOfOrder.filter = filterValue.trim().toLowerCase();

    if (this.listOfOrder.paginator) {
      this.listOfOrder.paginator.firstPage();
    }
  }

  ngOnInit() {
    this.getOrderList();
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
  }

  ngAfterViewInit() {
    this.listOfOrder.paginator = this.paginator as MatPaginator;
    this.listOfOrder.sort      = this.sort;
  }

  getOrderList() {
    this.ordersService.getOrders()
      .subscribe({
        next    : (data: OrderList) => {
          this.listOfOrder.data = data.orders;

        }, error: (error) => {
          console.log(error);
        }
      });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows     = this.listOfOrder.data.length;


    const x = () => {

    }
    return numSelected === numRows;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: OrdersInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.postcode + 1}`;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.listOfOrder.data);
  }


  tableColumnController() {
    console.log("activated table column controller");
  }

  headFill() {
    this.exHeadFill = !this.exHeadFill;
  }

  getProduct() {
    this.productService.getProduct(this.id)
      .subscribe({
        next    : (data: ProductList) => {
          this.ProductDetails.data = data.products;
          console.log("fun " + this.ProductDetails.data);
        }, error: (error) => {
          console.log(error);
        }
      });
  }
}
