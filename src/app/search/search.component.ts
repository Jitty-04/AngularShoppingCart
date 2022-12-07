import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  productname=""
  readValues=()=>
  {
    let data:any= {"productname":this.productname}
  console.log(data)
  
    }
  

}
