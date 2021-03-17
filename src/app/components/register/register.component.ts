import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustormvalidationService} from 'src/app/custormvalidation.service';
import { RegisterserviceService } from 'src/app/registerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    userInfo: FormGroup
    
    submitted=false
  constructor(private fb:FormBuilder,
    private customValidator:CustormvalidationService,
    private auth:RegisterserviceService,
    private router:Router
    ){}
     
  
  ngOnInit(): void {
   
    this.userInfo = this.fb.group({
    userName:['',[Validators.required, Validators.minLength(4)]],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
    confirmpassword:['', Validators.required]
  },{ validator: this.customValidator.passwordMatchValidator('password','confirmpassword')})
  }
  get userInfoControl(){
    return this.userInfo.controls
  }



  submit(){
      this.submitted = true;
      if (this.userInfo.valid) {
        alert('Form Submitted succesfully!!!\n Check the values in browser console.');
        console.table(this.userInfo.value);
      this.auth.registerUser(this.userInfo.value).subscribe(
        res=>{ console.log(res)
          localStorage.setItem('token', res.token)},
        err=>console.log(err)
        
      )
        this.router.navigate(['/home'])
        this.userInfo.reset()
      }
    }
    
  
  }
  


