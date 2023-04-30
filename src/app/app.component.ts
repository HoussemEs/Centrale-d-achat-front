import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import {CommonService} from './common.service';
import {HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Router} from "@angular/router"

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
  constructor(private newService :CommonService, private router:Router) { }
  Repdata;
  valbutton ="Save";
  choosen=2;
  userType="";
  ngOnInit() {

    this.userType= localStorage.getItem("user").toLowerCase();
    if(this.userType=='admin'){
      this.router.navigate(['/dashboard'])
    }else if(this.userType=='user'){
     this.router.navigate(['/shop/home'])
    }

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


  onSave = function (todo, isValid: boolean) {
    console.log("i'm in onSave");
    todo.mode=this.valbutton;
      this.newService.saveTodo(todo)
        .subscribe(data => { console.log(data.data);
          this.ngOnInit();
      }
      , error => this.errorMessage = error )
  }

  edit = function (kk) {
    this.id = kk._id;
    this.name = kk.name;
    this.priority = kk.priority;
    this.term = kk.term;
    this.done = kk.done;
    this.valbutton = "Update";
  }

  ChangeStatus = function (kk) {
    console.log("i'm in app.ts");
    console.log(kk);
    this.id = kk._id;
    this.done = 1;
    this.valbutton = "ChangeStatus";
    this.mode = this.valbutton;
    this.newService.saveTodo(this)
        .subscribe(res => { console.log(res)});
          this.ngOnInit();
  }

  delete = function(id) {
    this.newService.deleteTodo(id).subscribe(data =>{console.log(data.data);this.ngOnInit();},error=>this.errorMessage=error)
  }
}
