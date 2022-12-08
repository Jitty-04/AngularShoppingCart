import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
        (response:any)=>
        {
          this.data=response;
        }
      )
    }
    
      data:any=[] 
  
  
  name=""
  searchProduct:any=[]
  readValues=()=>
  {
    let data:any={"name":this.name}
    console.log(data)
    this.api.searchProduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0){
          alert("Invalid Product name")
          this.name=""
        }
        else{
          this.data=[];
          this.searchProduct=response;

        }
        
          
      }
    )
  
  
  }
  

}
