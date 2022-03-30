import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adminlogin } from '../adminlogin';
import { Product } from '../adminproducts/products';
import { Admin } from '../TS/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  baseurl = "http://localhost:8686/product" 

  baseurl1 = "http://localhost:8686/login" 


  editProduct(id:number,product:Product){
    console.log(id);
    console.log(product)
    return this.http.post<any[]>(this.baseurl+'/editProduct/'+id,product)
  }

  listAllProducts(){
    return this.http.get<any[]>(this.baseurl+'/productlist')
  }

  delete(id:number)
  {
    return this.http.delete<any[]>(this.baseurl+'/delProduct/'+id)
  }

  addProduct(product:Product){
    return this.http.post<any[]>(this.baseurl+'/addProduct',product)
  }

  update(id:number){
    return this.http.post<any[]>(this.baseurl+'/toggleProduct/'+id,Product);
  }

  updateSecond(id:number){
    return this.http.post<any[]>(this.baseurl+'/toggleProductSecond/'+id,Product);
  }

  listAllCustomers(){
    return this.http.get<any[]>(this.baseurl1+'/getUser')
  }

  adminLogin(adminLogin:Adminlogin):Observable<Admin>{
    return this.http.post<Admin>("http://localhost:8686/login/loginAdmin",adminLogin)


  
}
}