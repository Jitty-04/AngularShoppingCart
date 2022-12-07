import { Component } from '@angular/core';

@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent {
  email=""
  password=""
  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)

}
}
