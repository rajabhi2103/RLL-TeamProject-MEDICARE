import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../adminproducts/products';
import { CustomerService } from '../Services/customer.service';
import { Sum } from '../TS/sum';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.css']
})
export class PaymentsuccessComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private CustomerService:CustomerService) { }

  ngOnInit(): void {
    this.loadData(),
    this.sumofproduct()
  }

  // Product : Product = (sessionStorage.getItem("product"))

  ProductList : Product[]=[];

  sumList : Sum[]=[]
  
  loginid = JSON.parse(sessionStorage.getItem("currentAdminId"));
  
  sum:Sum[] = JSON.parse(sessionStorage.getItem("Sum"));

  product:Product[] = JSON.parse(sessionStorage.getItem("product"));

  loadData(){
    console.log("LOGIN ID"+this.loginid)
    this.CustomerService.bookedProducts(this.loginid).subscribe(
      data=>{
      this.ProductList=data;
      console.log(this.ProductList)
      }
    )
  }

  sumofproduct(){
    this.CustomerService.sumofproducts(this.loginid).subscribe(
      data=>{
      this.sumList=data;
      console.log(this.sumList);
      }
    )
  }

  backtodashboard(){
    this.router.navigate(['/customerproducts'])
    this.CustomerService.fornotprint(this.loginid).subscribe(
      data=>{
      console.log(this.loginid);
      }
    )
  }
  printPage() {
    window.print();
    this.CustomerService.fornotprint(this.loginid).subscribe(
      data=>{
      console.log(this.loginid);
      }
    )
  }


}
