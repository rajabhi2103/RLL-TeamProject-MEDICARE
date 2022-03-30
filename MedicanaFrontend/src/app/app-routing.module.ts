import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminaddproductsComponent } from './adminaddproducts/adminaddproducts.component';
import { AdmineditproductComponent } from './admineditproduct/admineditproduct.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import { AdminviewcustomersComponent } from './adminviewcustomers/adminviewcustomers.component';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { CustomercartComponent } from './customercart/customercart.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerproductsComponent } from './customerproducts/customerproducts.component';
import { CustomerprofileupdateComponent } from './customerprofileupdate/customerprofileupdate.component';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
 
  
  {path: '',component:HomeComponent},
  {path: 'register', component: CustomerregistrationComponent},
  {path: 'login', component: AdminloginComponent},
  {path: 'adminaddprodcuts', component: AdminaddproductsComponent},
  {path: 'adminproducts', component: AdminproductsComponent},
  {path: 'adminviewcustomers', component: AdminviewcustomersComponent},
  {path: 'adminhome', component: AdminhomeComponent},
  {path: 'admineditproduct', component: AdmineditproductComponent},
  {path: 'home',component:HomeComponent},
  {path: 'apphome',component:AppComponent},
  {path: 'video',component:VideoComponent},
  {path: 'customerdashboard',component:CustomerdashboardComponent},
  {path: 'customerlogin', component: CustomerloginComponent},
  {path: 'customerproducts', component: CustomerproductsComponent},
  {path: 'customerprofileupdate', component: CustomerprofileupdateComponent},
  {path: 'customercart', component: CustomercartComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'paymentsuccess', component: PaymentsuccessComponent},
  {path: 'searchpage', component: SearchpageComponent},
  {path: 'CategoryComponent', component: CategoryComponent },
  {path: 'about', component: AboutComponent }

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
