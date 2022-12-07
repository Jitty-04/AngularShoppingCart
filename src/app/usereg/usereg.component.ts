import { Component } from '@angular/core';

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
  
  readValues=()=>
  {
    let data:any= {"name":this.name,"address":this.address,"phno":this.phno,"email":this.email,"password":this.password,"confirmpassword":this.confirmpassword}
  console.log(data)
  
    }
  

}
