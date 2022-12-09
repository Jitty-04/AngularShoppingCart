import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent {
  constructor(private api:ApiService,private route:Router){}
  email=""
  password=""
  searchUsers:any=[]

  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    this.api.searchUsers(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0){
          alert("Invalid email or password")
          this.email=""
          this.password=""
        }
        else{
          
          this.searchUsers=response;
          let userid=response.userid
          console.log(userid)
          localStorage.setItem("userInfo",userid)
          this.route.navigate(["viewprofile"])

        }
        
          
      }
    )
  
  
  }
}
