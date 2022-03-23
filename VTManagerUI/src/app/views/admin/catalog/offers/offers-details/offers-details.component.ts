import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from "@angular/forms";
import {OrderList, OrdersInterface} from "../../../../../interfaces/orders";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {Fruit} from "../../products/product-details/product-details.component";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {OrdersService} from "../../../../../services/orders.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../../../../../services/products.service";
import {MatChipInputEvent} from "@angular/material/chips";
import {ProductList} from "../../../../../interfaces/products";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrls: ['./offers-details.component.css'],
  providers: [OrdersService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OffersDetailsComponent implements OnInit {

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
  readonly separatorKeysCodes                      = [ENTER, COMMA] as const;
  fruits: Fruit[]                                  = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];
  value4: string                                   = '';
  text1: any;
  value1                                           ='Rund ribeye geportioneerd 5x200gram';
  cities                                           = ['en', 'fr', 'es'];
  selectedCity                                     = [];
  selectedValues                                   = [];
  selectedCities                                   = [];
  values2                                          = [];
  text2                                            = "";
  langTitle=['En', 'Fr', 'Es'];
  selectedlangTitle=[];
  @ViewChild(MatPaginator, {static: true}) paginator?: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | null         = null;


  constructor(private ordersService: OrdersService,
              private route: ActivatedRoute,
              private router: Router,
              private productService: ProductsService) {

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

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  selectedOptions: any;


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
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
        }, error: (error) => {
          console.log(error);
        }
      });
  }
}
