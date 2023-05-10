import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import {CommonService} from './common.service';
import {HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Route, Router} from "@angular/router"

//let template = './app.component.html';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  id=0;
  name="";
  priority=0;
  term="";
  done=0;
  t:any;
  userType: string;
  constructor(private router:Router) { }
  Repdata;
  valbutton ="Save";
  choosen=2;

  ngOnInit() {
    this.userType= localStorage.getItem("user").toLowerCase();
    if(this.userType=='admin'){
      this.router.navigate(['/dashboard'])
    }else if(this.userType=='user'){
     this.router.navigate(['/shop/home'])
   /* if(this.choosen==0){
      this.newService.GetTodos().subscribe(data => this.Repdata = data);
    }else if(this.choosen==1){
      this.newService.GetSmallTodos().subscribe(data => this.Repdata = data);
    }else if(this.choosen==2){
      this.newService.getSortedTodos().subscribe(data => this.Repdata = data);
    }
    console.log(this.Repdata);
  */
    //this.newService.GetTodos().subscribe(data => this.Repdata = data);

 }
  }
}
