import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  users: any[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
   this.fetchUserData();
 }
 
   fetchUserData() {
     this.http.get<any>('assets/data.json').subscribe(
       (data) => {
         this.users = data;
         console.log(data); 
       },
       (error) => {
         console.error(error);
       }
     );
   }


  searchQuery: string;
  showSearchHint: boolean = false;

 



  toggleSearchHint(): void {
    this.showSearchHint = !this.showSearchHint;
  }
 
}



