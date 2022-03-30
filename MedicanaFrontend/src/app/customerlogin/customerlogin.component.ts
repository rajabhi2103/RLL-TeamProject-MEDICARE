import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminlogin } from '../adminlogin';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  currentMsgToChild1 = '';

  message : string;
  
  adminLogin : Adminlogin = new Adminlogin();
  
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
 

  login(){
    
    console.log(JSON.stringify(this.adminLogin));
    this.adminService.adminLogin(this.adminLogin).subscribe(
      adminStatus=>{
        // alert(JSON.stringify(adminStatus));
        if( adminStatus!=null){
        this.message='';
        sessionStorage.setItem("currentAdminId", adminStatus.id.toString());
       sessionStorage.setItem("currentAdminName", adminStatus.name);
      //  this.router.navigate(['/adminViews']);
      this.message="Login succesful";
      alert("Login succesful.");
             
      this.router.navigate(['/customerdashboard']);
        }
        else {
         
             this.message="Invalid Credentials";

        }

        

  
  
      }
    );
    
  }


}
