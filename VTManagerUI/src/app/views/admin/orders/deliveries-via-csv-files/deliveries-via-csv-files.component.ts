import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OrdersService} from "../../../../services/orders.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {OrderList, OrdersInterface} from "../../../../interfaces/orders";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {FormControl} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-deliveries-via-csv-files',
  templateUrl: './deliveries-via-csv-files.component.html',
  styleUrls: ['./deliveries-via-csv-files.component.css'],
  providers: [OrdersService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DeliveriesViaCsvFilesComponent implements OnInit,AfterViewInit  {
  title1="Deliveries via .csv files";
  title2="Home -";
  title3="Deliveries via .csv files";
  availableColumns:any = [ 'customer', 'business', 'postcode', 'order_date', 'date_of_delivery', 'delivery','billing','payment','price'];
  columnsToDisplay = [  'customer', 'business', 'postcode', 'order_date', 'date_of_delivery', 'delivery'];
  expandedElement: OrdersInterface|null = null;
  listOfOrder: MatTableDataSource<OrdersInterface> = new MatTableDataSource();
  selection = new SelectionModel<OrdersInterface>(true, []);
  toppings = new FormControl();
  @ViewChild(MatPaginator,{static:true}) paginator?: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | null = null;
  exHeadFill=false;
  extention = true;

  constructor(private ordersService: OrdersService) {

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listOfOrder.filter = filterValue.trim().toLowerCase();

    if (this.listOfOrder.paginator) {
      this.listOfOrder.paginator.firstPage();
    }
  }
  ngOnInit() {
    this.getOrderList();
  }
  ngAfterViewInit() {
    this.listOfOrder.paginator = this.paginator as MatPaginator;
    this.listOfOrder.sort = this.sort;
  }
  getOrderList() {
    this.ordersService.getOrders()
      .subscribe({
        next: (data : OrderList) => {
          this.listOfOrder.data = data.orders;

        }, error: (error) => {
          console.log(error);
        }
      });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.listOfOrder.data.length;


    const x = () => {

    }
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  selectedOptions: any;



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

  secExtendControl() {
    this.extention = !this.extention;
  }
}

