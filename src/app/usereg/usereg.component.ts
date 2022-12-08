import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usereg',
  templateUrl: './usereg.component.html',
  styleUrls: ['./usereg.component.css']
})
export class UseregComponent {

  name=""
  address=""
  phno=""
  email=""
  password=""
  confirmpassword=""
  constructor(private api:ApiService){

  }
readValues=()=>
{
  let data:any={
    "name":this.name,"address":this.address,"phno":this.phno,"email":this.email,
    "password":this.password
  }
  console.log(data)
  this.api.addUsers(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("user registered successfully")
        this.name=""
        this.address=""
        this.phno=""
        this.email=""
        this.password=""
        this.confirmpassword=""
      
        
      } else {
        alert("something went wrong")
      }
    }
  )


}
  

}
