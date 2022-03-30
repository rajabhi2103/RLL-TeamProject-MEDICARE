import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustomerregistrationComponent } from './customerregistration/customerregistration.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import { AdminaddproductsComponent } from './adminaddproducts/adminaddproducts.component';
import { AdminviewcustomersComponent } from './adminviewcustomers/adminviewcustomers.component';
import { AdmineditproductComponent } from './admineditproduct/admineditproduct.component';
import { VideoComponent } from './video/video.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerproductsComponent } from './customerproducts/customerproducts.component';
import { CustomercartComponent } from './customercart/customercart.component';
import { CustomerprofileupdateComponent } from './customerprofileupdate/customerprofileupdate.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    CustomerregistrationComponent,
    HomeComponent,
    AdminhomeComponent,
    AdminproductsComponent,
    AdminaddproductsComponent,
    AdminviewcustomersComponent,
    AdmineditproductComponent,
    VideoComponent,
    CustomerloginComponent,
    CustomerdashboardComponent,
    CustomerproductsComponent,
    CustomercartComponent,
    CustomerprofileupdateComponent,
    PaymentComponent,
    PaymentsuccessComponent,
    SearchpageComponent,
    CategoryComponent,
    AboutComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
