import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  url1="http://localhost:9091/insert"
insertService(data:any){
  return this.http.post(this.url1,data)
}
}
