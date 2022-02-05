import {Component, Input, OnInit, } from '@angular/core';
import {OrdersService} from "../../../../services/orders.service";
import {OrdersInterface} from "../../../../interfaces/orders";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrdersService]

})
export class OrdersComponent implements OnInit {
  orders: OrdersInterface[] | any;
  headerExpand: false | any;
  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.ordersService.getOrders().subscribe(data => {
      console.log(data);
      this.orders = data.orders;
    });

  }
headerRow(){
    this.headerExpand = !this.headerExpand;
}



}
