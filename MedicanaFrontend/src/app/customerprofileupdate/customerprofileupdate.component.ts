import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../Services/customer.service';
import { Customer } from '../TS/customer';

@Component({
  selector: 'app-customerprofileupdate',
  templateUrl: './customerprofileupdate.component.html',
  styleUrls: ['./customerprofileupdate.component.css']
})
export class CustomerprofileupdateComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private CustomerService:CustomerService) { }
  id:number = parseInt(sessionStorage.getItem("currentAdminId"));
 
  ngOnInit(): void {
  }

  customer :Customer = new Customer();
  backtodashboard(){
    this.router.navigate(['/customerdashboard'])
  }
  UpdateProfile(password:String){
    this.CustomerService.UpdateProfile(this.customer).subscribe(
      data=>{
        
       
      }
    )
  }
  UpdateProfile1(contact:number){
    this.CustomerService.UpdateProfile(this.customer).subscribe(
      data=>{
        
       
      }
    )
  }
  UpdateProfile2(name:String){
    this.CustomerService.UpdateProfile(this.customer).subscribe(
      data=>{
        
       
      }
    )
  }
}
