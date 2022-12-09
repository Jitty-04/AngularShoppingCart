import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component {
  userid:any=""
userdata:any=[]
constructor(private api:ApiService){
  this.userid=localStorage.getItem("userInfo")
  let data:any={
    "id":this.userid
  }
  this.api.viewUsers(data).subscribe(
    (response:any)=>
    {
      this.userdata=response;
    }
  )
}

}
