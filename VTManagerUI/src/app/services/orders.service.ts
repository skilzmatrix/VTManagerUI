import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderList, OrdersInterface} from "../interfaces/orders";
import {Observable} from "rxjs";



@Injectable()
export class OrdersService {
  constructor(private http: HttpClient) { }

  getOrders():Observable<OrderList>{
    return this.http.get<OrderList>('/assets/orders.json');
  }

  // getOrders() {
  //   return this.http.get<OrderList>('/assets/orders.json');
  //
  // }

}
