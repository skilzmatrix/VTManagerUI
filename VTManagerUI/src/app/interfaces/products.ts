
export interface ProductsInterface {
  id: string;
  photo: string;
  name: string;
  product_type: string;
  categories: string;
  supplier: string;
  stoke: number;
  btw: number;
  ean: string;
  kind: string;
  approved: boolean;
  status: string;
  sales_unit:number;
  extend:string;
}
export interface ProductList {
  products: ProductsInterface[];
}
