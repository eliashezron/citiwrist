import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  loggedIn(){
    return !!localStorage.getItem('token')  
  }
  logoutUser(){
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }
}
