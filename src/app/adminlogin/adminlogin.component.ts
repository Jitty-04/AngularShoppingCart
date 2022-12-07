import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username=""
  password=""

  constructor(private route:Router){}
  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    if(this.username=="admin" && this.password=="12345"){
      
      
      this.route.navigate(["adminhome"])
    }
    else{
      this.password=""
      this.username=""
      alert("Invalid Credentials")
    }
  }
 

  }


  
 



