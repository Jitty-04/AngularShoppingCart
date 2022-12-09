import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addProduct=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }
  fetchProduct=()=>
  {
    return this.http.get("http://localhost:8080/viewall")
  }
  searchProduct=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/search",dataToSend)
  }
  addUsers=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/addusers",dataToSend)
  }
  searchUsers=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/usersearch",dataToSend)
  }
  viewUsers=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewprofile",dataToSend)
  }
}
