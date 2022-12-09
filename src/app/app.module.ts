import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewtableComponent } from './viewtable/viewtable.component';
import { SearchComponent } from './search/search.component';
import { UseregComponent } from './usereg/usereg.component';
import { UserlogComponent } from './userlog/userlog.component';
import {HttpClientModule} from '@angular/common/http';
import { UserhomeComponent } from './userhome/userhome.component';
import { Nav2Component } from './nav2/nav2.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

const myrouter:Routes=[
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"adminhome",
    component:AdminhomeComponent
  },
  {
    path:"add",
    component:AddproductComponent
  },
  {
    path:"view",
    component:ViewtableComponent
  },
  {
    path:"search",
    component:SearchComponent
  },
  {
    path:"userregistration",
    component:UseregComponent

  },
  {
    path:"usersignup",
    component:UserlogComponent
  },
  {
     path:"userhome",
     component:UserhomeComponent
  },
  {
    path:"viewprofile",
    component:ViewprofileComponent
 }

]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminhomeComponent,
    NavComponent,
    AddproductComponent,
    ViewtableComponent,
    SearchComponent,
    UseregComponent,
    UserlogComponent,
    UserhomeComponent,
    Nav2Component,
    ViewprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myrouter),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
