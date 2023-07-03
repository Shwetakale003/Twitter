import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(private router: Router) {}

  submitForm(form: NgForm) {
    if (form.valid) {
  
      this.router.navigate(['']);
    } else {
      
      alert('Please fill in all required fields correctly.');
    }
  }
}
