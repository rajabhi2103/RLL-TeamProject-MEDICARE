import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../adminproducts/products';
import { Cart } from '../TS/cart';

import { Customer } from '../TS/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  baseurl = "http://localhost:8686/product"



  //to delete product from cart
  OnClickDelProdct(id:number){
    return this.http.delete<any[]> ('http://localhost:8686/cart/delProductfromCart/'+id);
  }

  //to update productquantity
  //http://localhost:8686/cart/updateaddone/{pid}/{lid}/{prd_qty}
  productquantity(lid:number,pid:number,prd_qty:number){
    return this.http.post<any[]> ('http://localhost:8686/cart/updateaddone/'+pid+'/'+lid+'/'+prd_qty,Cart);
  }

  //to make products as booked
  booked(id:number){
    return this.http.put<any[]> ('http://localhost:8686/cart/makebooking/'+id,Cart);
  }

  //to get booked products
  bookedProducts(id:number){
    return this.http.get<any[]> ('http://localhost:8686/cart/bookedProducts/'+id);
  }

  //to make customer regsitration
  register(customer:Customer):Observable<any>{
    return this.http.post<Customer> ("http://localhost:8686/login/addlogin",customer);

  }

  id:number = parseInt(sessionStorage.getItem("currentAdminId"));

   //to make customer password
   UpdateProfile(customer:Customer):Observable<any>{
    return this.http.put<Customer> ("http://localhost:8686/login/UpdateName/"+this.id,customer);

  }
  //to get list of available products
  listAllAvaProducts(){
    return this.http.get<any[]> (this.baseurl+'/productavalist');
  }

  //to add carts to products
  addtomycart(cart:Cart){
    console.log(cart)
    return this.http.post<any[]> ('http://localhost:8686/cart/addToCart',cart);
  }

  //to get products as per login id
  myproducts(id:number){
    console.log(id)
    return this.http.get<any[]> ('http://localhost:8686/cart/cartlistbyloginsid/'+id);
  }

  //to get sum of products
  sumofproducts(id:number){
    return this.http.get<any[]> ('http://localhost:8686/cart/sumofproduct/'+id);
  }

  //to make print as p
  forprint(id:number){
    return this.http.put<any[]> ('http://localhost:8686/cart/forprint/'+id,Cart);
  }

   //not to make print as p
   fornotprint(id:number){
    return this.http.put<any[]> ('http://localhost:8686/cart/fornotprint/'+id,Cart);
  }

  //search by product name 
  search(pname:string){
    return this.http.put<any[]> ('http://localhost:8686/cart/search/'+pname,Product);
  }


  //categories
  //antibiotic category

  antibiotic(){
    return this.http.get<any[]> ('http://localhost:8686/product/Antibiotic');
  }

  SYRUP(){
    return this.http.get<any[]> ('http://localhost:8686/product/SYRUP');
  }

  INSULIN(){
    return this.http.get<any[]> ('http://localhost:8686/product/INSULIN');
  }

 
}
