import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrdersComponent{
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  myeven = false;
  columnsToDisplay =  ['extend','select','no', 'customer', 'business', 'postcode','order_date','date_of_delivery','delivery','actions' ];
  expandedElement: PeriodicElement | null | any;
  expandedFilterElement: PeriodicElement | null | any;

  selection = new SelectionModel<PeriodicElement>(true, []);



  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.customer + 1}`;
  }
}

export interface PeriodicElement {
  no: number;
  customer: string;
  business: string;
  postcode: number;
  order_date:string;
  date_of_delivery:string;
  delivery:string;
  actions:string;
  extend:string;
  filter:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {filter:'',extend:'',no: 122123, customer:'Alessandro Perversi',business:'pura vida', postcode:343435, order_date:'2014-02-12',date_of_delivery:'2014-02-12', delivery:'ready for shipment',actions:'' },
  {filter:'',extend:'',no: 122123, customer:'Alessandro Perversi',business:'pura vida', postcode:343435, order_date:'2014-02-12',date_of_delivery:'2014-02-12', delivery:'ready for shipment',actions:'' },
  {filter:'',extend:'',no: 122123, customer:'Alessandro Perversi',business:'pura vida', postcode:343435, order_date:'2014-02-12',date_of_delivery:'2014-02-12', delivery:'ready for shipment',actions:'' },
  {filter:'',extend:'',no: 122123, customer:'Alessandro Perversi',business:'pura vida', postcode:343435, order_date:'2014-02-12',date_of_delivery:'2014-02-12', delivery:'ready for shipment',actions:'' },
  {filter:'',extend:'',no: 122123, customer:'Alessandro Perversi',business:'pura vida', postcode:343435, order_date:'2014-02-12',date_of_delivery:'2014-02-12', delivery:'ready for shipment',actions:'' },
  {filter:'',extend:'',no: 122123, customer:'Alessandro Perversi',business:'pura vida', postcode:343435, order_date:'2014-02-12',date_of_delivery:'2014-02-12', delivery:'ready for shipment',actions:'' },

];
