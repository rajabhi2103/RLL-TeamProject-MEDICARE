import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminlogin } from '../adminlogin';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  message : string;
  
  adminLogin : Adminlogin = new Adminlogin();
  
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    
  }

  

  login(){
    if(this.adminLogin.id=="Admin" && this.adminLogin.password =="Admin" ){
      this.router.navigate(['/adminhome']);
      alert('TAKING TO ADMIN HOME');
    }
    else
    alert('SORRY WRONG CREDNTIALS..');
  }
  
  

}
