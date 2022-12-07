import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewtable',
  templateUrl: './viewtable.component.html',
  styleUrls: ['./viewtable.component.css']
})
export class ViewtableComponent {
  constructor(private api:ApiService){
    api.fetchProduct().subscribe(
      (response:any)=>
      {
        this.data=response;
      }
    )
  }
  
    data:any=[] 


}
