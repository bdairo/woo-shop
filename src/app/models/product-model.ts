export interface ProductModel {
  id:number;
  name :string;
  catregories:any[];
  description:string;
  images:any[];
  price:string;
  on_sale:boolean;
  featured:boolean;
  sale_price:string;
  regular_price:string;
  slug:string;
  stock_quanhtity:number;
  stock_status:string;
  in_cart?:number;
}
