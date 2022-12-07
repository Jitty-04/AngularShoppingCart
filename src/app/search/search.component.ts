import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private api:ApiService){}
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
          this.searchProduct=response;

        }
        
          
      }
    )
  
  
  }
  

}
