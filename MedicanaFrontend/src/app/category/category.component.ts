import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../adminproducts/products';
import { CustomerService } from '../Services/customer.service';
import { Cart } from '../TS/cart';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private CustomerService:CustomerService) { }

  ngOnInit(): void {
    this.antibiotic()
  }

  ProductList : Product[]=[];

  Product : Product = new Product();

  loginid = JSON.parse(sessionStorage.getItem("currentAdminId"))
  cart : Cart = new Cart();

  antibiotic(){
    this.CustomerService.antibiotic().subscribe(
      data=>{
        this.ProductList=data;
        console.log(this.ProductList)
      }
    )
  }
  
  SYRUP(){
    this.CustomerService.SYRUP().subscribe(
      data=>{
        this.ProductList=data;
        console.log(this.ProductList)
      }
    )
  }

  INSULIN(){
    this.CustomerService.INSULIN().subscribe(
      data=>{
        this.ProductList=data;
        console.log(this.ProductList)
      }
    )

  }
  addtomycart(productid:number,productname:string,productprice:number,producttype:string){
    
    this.cart = {
      lid: this.loginid,
      pid: productid,
      id: 0,
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
