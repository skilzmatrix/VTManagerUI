import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductList} from "../interfaces/products";

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) { }

  getProducts():Observable<ProductList>{
    return this.http.get<ProductList>('/assets/products.json');
  }

  getProduct(id: string):Observable<ProductList>{
    return this.http.get<ProductList>('/assets/products.json');
  }
}
