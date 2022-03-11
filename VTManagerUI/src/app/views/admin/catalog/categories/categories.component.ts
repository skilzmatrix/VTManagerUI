import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {OrderList, OrdersInterface} from "../../../../interfaces/orders";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {FormControl} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {OrdersService} from "../../../../services/orders.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ProductList, ProductsInterface} from "../../../../interfaces/products";
import {ProductsService} from "../../../../services/products.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [OrdersService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CategoriesComponent implements AfterViewInit,OnInit {
  title1="Catgory";
  title2="Home - Catalog -";
  title3="Catgory";
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
  availableColumns:any = [  'image','name', 'product_type', 'categories', 'supplier', 'stock', 'btw', 'status'];
  columnsToDisplay = ['image','name', 'product_type', 'categories', 'supplier', 'stock', 'btw', 'status'];
  exHeadFill=false;
  expandedElement: ProductsInterface|null = null;
  listOfProduct: MatTableDataSource<ProductsInterface> = new MatTableDataSource();
  selection = new SelectionModel<ProductsInterface>(true, []);
  toppings = new FormControl();
  @ViewChild(MatPaginator,{static:true}) paginator?: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | null = null;
  math=(Math.floor(Math.random()*100));


  constructor(private productsService: ProductsService) {

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(this.listOfProduct);
    this.listOfProduct.filter = filterValue.trim().toLowerCase();

    if (this.listOfProduct.paginator) {
      this.listOfProduct.paginator.firstPage();
    }
  }
  ngOnInit() {
    this.getProductList();
  }
  ngAfterViewInit() {
    this.listOfProduct.paginator = this.paginator as MatPaginator;
    this.listOfProduct.sort = this.sort;
  }
  getProductList() {
    this.productsService.getProducts()
      .subscribe({
        next: (data : ProductList) => {
          this.listOfProduct.data = data.products;

        }, error: (error) => {
          console.log(error);
        }
      });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.listOfProduct.data.length;


    const x = () => {

    }
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  selectedOptions: any;


  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ProductsInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }

  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.listOfProduct.data);
  }


  tableColumnController() {
    console.log("activated table column controller");
  }

  headFill() {
    this.exHeadFill = !this.exHeadFill;
  }
}
