export interface OrdersInterface {
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
  billing:string;
  payment:string;
  price:string;
}

export interface OrderList {
  orders: OrdersInterface[];
}
