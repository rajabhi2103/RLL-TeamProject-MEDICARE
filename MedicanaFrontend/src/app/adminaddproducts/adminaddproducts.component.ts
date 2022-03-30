import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../adminproducts/products';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-adminaddproducts',
  templateUrl: './adminaddproducts.component.html',
  styleUrls: ['./adminaddproducts.component.css']
})
export class AdminaddproductsComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
  }

  Product : Product = new Product();

  validateProduct(product: Product) {
    // pname:string="";
    // price:number=0;
    // pqty:number;
    // ptype:string;
    // status:string;
    var result = true
    if(product.pname == null || product.pname == '') {
      alert("Product name is required.")
      result = false
    } else if (product.price == null || product.price <= 0) {
      alert("Price cannot be 0 or negative")
      result = false
    }
      return result;
  }


  onclick(){
    if(this.validateProduct(this.Product)) {
      this.adminService.addProduct(this.Product).subscribe(
        data => console.log(data)
      )
      this.Product = new Product();
      this.router.navigate(['/adminproducts'])
    }
  }

  adminhome(){
    alert("TAKING TO ADMIN HOME")
    this.router.navigate(['/adminhome'])
  }
}