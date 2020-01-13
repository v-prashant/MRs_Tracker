import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AdminloginComponent } from './Adminlogin/Adminlogin.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Add_userComponent } from './add_user/add_user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './login/user.service';
import { DoctorComponent } from './doctor_list/doctor_list.component';
import { DrService } from './doctor_list/dr.service';
import { Add_drComponent } from './add_dr/add_dr.component';
import { ProductComponent } from './product_list/product_list.component';
import { ProductService } from './product_list/product.service';
import { Add_productComponent } from './add_product/add_product.component';
import { AddUserService } from './add_user/adduser.service';
import { AddDRService } from './add_dr/adddr.service';
import { AddProductService } from './add_product/add_product.service';
import { Edit_userComponent } from './edit_user/edit_user.component';
import { EditUserService } from './edit_user/edit_user.service';
import { Edit_productComponent } from './edit_product/edit_product.component';
import { EditProductService } from './edit_product/edit_product.service';
import { MRloginComponent } from './MRlogin/MRlogin.component';
import { MRloginService } from './MRlogin/MRlogin.service';



const routes: Route[] = [

  // { path: '', redirectTo: '/login', pathMatch: 'full' },

  // the default component
 // { path: '', component: AdminloginComponent },

  {path: 'login' , component: AdminloginComponent},
  {path: 'login/dashboard', component: DashboardComponent},

  { path: 'login/dashboard/user', component: LoginComponent },
  {path: 'login/dashboard/drs', component: DoctorComponent},
  {path: 'login/dashboard/product',component: ProductComponent},

  {path: 'login/dashboard/user/add_user',component: Add_userComponent},
  {path: 'login/dashboard/drs/add_dr',component: Add_drComponent},
  {path: 'login/dashboard/product/add_product',component: Add_productComponent},

  {path: 'login/dashboard/user/edit_user/:id',component: Edit_userComponent },
  {path: 'login/dashboard/product/edit_product/:id',component: Edit_productComponent },




  {path: 'MRlogin', component: MRloginComponent},
  
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminloginComponent,
    Add_userComponent,
    DashboardComponent,
    DoctorComponent,
    Add_drComponent,
    ProductComponent,
    Add_productComponent,
    Add_drComponent,
    Edit_userComponent,
    Edit_productComponent,
    MRloginComponent
    
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    DrService,
    ProductService,
    AddUserService,
    AddDRService,
    AddProductService,
    EditUserService,
    EditProductService,
    MRloginService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
