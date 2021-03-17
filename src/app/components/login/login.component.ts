import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    userForm : FormGroup;
    submitted = false

  constructor(private fb:FormBuilder,
    private login:LoginserviceService,
    private router:Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }
  get userFormControls(){
    return this.userForm.controls
  }
    submit(){
        this.submitted=true
      this.login.loginUser(this.userForm.value).subscribe(
        res=>{ console.log(res)
        localStorage.setItem('token', res.token)},
        err=>console.log(err)
      )
      this.router.navigate(['/home'])
    }
}
