import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../adminproducts/products';
import { AdminService } from '../Services/admin.service';
import { CustomerService } from '../Services/customer.service';
import { Cart } from '../TS/cart';


@Component({
  selector: 'app-customerproducts',
  templateUrl: './customerproducts.component.html',
  styleUrls: ['./customerproducts.component.css']
})
export class CustomerproductsComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private CustomerService:CustomerService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loginid = JSON.parse(sessionStorage.getItem("currentAdminId"));
  

  ProductList : Product[]=[];

  cart : Cart = new Cart();

  
  
  loadData(){
    this.CustomerService.listAllAvaProducts().subscribe(
      data=>{
        this.ProductList=data;
        console.log(this.ProductList)
      }
    )
  }

  addtomycart(productid:number,productname:string,productprice:number,producttype:string){
    
    this.cart = {
      id: 0,
      lid: this.loginid,
      pid: productid,
      booked:'U',
      pname:productname,
      price:productprice,
      ptype:producttype
      

    }
    
    this.CustomerService.addtomycart(this.cart).subscribe(
      data=>{
        console.log(this.cart)
        console.log(this.loginid);
        console.log(productid);
      }
    )
    this.router.navigate(['/customercart'])
  }

  backtodashboard(){
    this.router.navigate(['/customerdashboard'])
  }
}
