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
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myrouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
