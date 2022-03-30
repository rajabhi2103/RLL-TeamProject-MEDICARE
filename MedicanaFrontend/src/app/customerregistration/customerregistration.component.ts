import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../Services/customer.service';
import { Customer } from '../TS/customer';

@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.css']
})
export class CustomerregistrationComponent implements OnInit {

  message:string;
  car: Customer=new Customer();
  
  constructor(private customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
  }
  
  register() {
    console.log(JSON.stringify(this.car));
    this.customerService.register(this.car).subscribe(
      data=>{
        if(data!=null){
          alert("Registraion successful,Your Login ID is "+data)
          this.router.navigate([''])
        }
        else {
          this.message="Registration Failed.";
         }
      }
    );
  }

}
