import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderList, OrdersInterface} from "../interfaces/orders";



@Injectable()
export class OrdersService {
  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<OrderList>('/assets/orders.json');

  }

}
