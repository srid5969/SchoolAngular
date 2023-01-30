import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  loginForm!: FormGroup;
  
  invalidLogin:boolean=false;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
    const loginPayload = {
      email : this.loginForm.controls['email'].value,
      password:this.loginForm.controls['password'].value
    }
    this.apiService.login(loginPayload).subscribe(data=>{
      if(data){
        window.localStorage.setItem('token',data.token);
        window.localStorage.setItem('firstName',data.users.firstName);
        window.localStorage.setItem('role',data.users.role);
      
        this.router.navigate(['/navbar/home']);
        console.log(data);

      }else{
        this.invalidLogin=true;
        // console.log(data);
        // this.router.navigate(['dashboard']);
      }
    });
  }
  
  ngOnInit() {
    window.localStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }

}
