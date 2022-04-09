import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderList, OrdersInterface} from "../../../../../interfaces/orders";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {FormControl} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {OrdersService} from "../../../../../services/orders.service";
import {ActivatedRoute, Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-suplier-order-details',
  templateUrl: './suplier-order-details.component.html',
  styleUrls: ['./suplier-order-details.component.css'],
  providers: [OrdersService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SuplierOrderDetailsComponent implements OnInit {
  public id: string = '';
  public idId: string = '';
  public idUser: string = '';
  delivery_statuses=['Waiting','Ready','Delivered'];
  statu='';
  title1="Orders";
  title2="Home -";
  title3="Orders";
  availableColumns:any = [ 'customer', 'business', 'postcode', 'order_date'];
  columnsToDisplay = [  'customer', 'business', 'postcode', 'order_date'];
  expandedElement: OrdersInterface|null = null;
  listOfOrder: MatTableDataSource<OrdersInterface> = new MatTableDataSource();
  selection = new SelectionModel<OrdersInterface>(true, []);
  toppings = new FormControl();
  @ViewChild(MatPaginator,{static:true}) paginator?: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | null = null;
  exHeadFill=false;
  extention =true;
  newOrderControlIndicator= true;
  selected = '';
  private n=1;
  selectedOptions: any;
  users = ['Anne&Max Rotterdam Korte Hoog 1', 'Anne&Max Rotterdam Korte Hoog 2'];
  private product :number = 1;
  times=['10.00 - 1.00','12.00 - 3.00','4.00 - 7.30','9.30 - 12.30']
  supplierSecIndicator = true;
  publisherSecIndicator = false;
  constructor(private ordersService: OrdersService,
              private route: ActivatedRoute,
              private router: Router,
  ) {

  }

  math=(Math.floor(Math.random()*100));

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.listOfOrder.filter = filterValue.trim().toLowerCase();

    if (this.listOfOrder.paginator) {
      this.listOfOrder.paginator.firstPage();
    }
  }
  ngOnInit() {
    this.getOrderList();
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.idId=this.id.slice(0,3);
    this.idUser=this.id.slice(3);
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

  countOfProduct(){
    return Array(this.product ).fill(0).map((x,i)=>i);
  }
  addPro(){
    this.product = this.product+1;
  }
  remPro(){
    this.product = this.product-1;
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

  secExtendControl() {
    this.extention = !this.extention;
  }

  newOrderControl() {
    this.newOrderControlIndicator = !this.newOrderControlIndicator;
  }

  supplierSec() {
    this.supplierSecIndicator = !this.supplierSecIndicator;
    this.publisherSecIndicator = !this.publisherSecIndicator;
  }
  publisherSec() {
    this.publisherSecIndicator = !this.publisherSecIndicator;
    this.supplierSecIndicator = !this.supplierSecIndicator;
  }
}

