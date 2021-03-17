import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  _registerUrl="http://localhost:5000/api/users/login"
  constructor(private http:HttpClient,
        private router:Router) { }

  loginUser(user:any){
    return this.http.post<any>(this._registerUrl, user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')  
  }
  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }
}
