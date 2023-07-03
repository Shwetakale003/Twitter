import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
 
  ngOnInit(): void {
    
  }
 
 
 loginForm: FormGroup;
 
 constructor(private formBuilder: FormBuilder, private router: Router) {
   this.loginForm = this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', Validators.required]
   });
 }
 
 login(): void {
   if (this.loginForm.invalid) {
   
     return;
   }
 
   
   const email = this.loginForm.value.email;
   const password = this.loginForm.value.password;
 
 
   this.router.navigate(['/home']);
 }
 
 openRegister(): void {
   
 }
 }