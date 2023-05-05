import { Component, OnInit} from '@angular/core';
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
  monitoringMode=0;
  ngOnInit() {
    this.monitoringMode= parseInt(localStorage.getItem("monitoringMode"));
    this.userType= localStorage.getItem("user").toLowerCase();
    if(this.userType=='admin'){
      // this.router.navigate(['/dashboard'])
    }else if(this.userType=='user'){
     this.router.navigate(['/shop/home'])
    }
 }

}
