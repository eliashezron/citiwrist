import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {

  _registerUrl="http://localhost:5000/api/users"
  constructor(private http:HttpClient) { }
  
  registerUser(user:any){
    return this.http.post<any>(this._registerUrl,user)
  }
}
