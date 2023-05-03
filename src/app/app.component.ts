import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import {HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Router} from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

//let template = './app.component.html';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router:Router) { }
  userType="";
  ngOnInit() {
    this.userType= localStorage.getItem("user").toLowerCase();
    if(this.userType=='admin'){
      // this.router.navigate(['/dashboard'])
    }else if(this.userType=='user'){
     this.router.navigate(['/shop/home'])
    }
 }

}
