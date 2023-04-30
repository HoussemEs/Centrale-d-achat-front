import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CommonService {

constructor(private http: HttpClient) { }

    saveTodo(todo){
      console.log("service.save");
      return this.http.post("http://localhost:8080/api/SaveTodo/", todo) .pipe(map((response: Response) =>response.json()))
    }

    changeStatus(todo){
      // console.log("service.save");
      return this.http.put("http://localhost:8080/api/Done/", todo) .pipe(map((response: Response) =>response.json()))
    }

    GetTodos(){
      return this.http.get("http://localhost:8080/api/getTodos/") .pipe(map((response: Response) => response))
    }

    getSortedTodos(){
      return this.http.get("http://localhost:8080/api/getSortedTodos/") .pipe(map((response: Response) => response))
    }

    GetSmallTodos(){
      return this.http.get("http://localhost:8080/api/getSmallTodos/") .pipe(map((response: Response) => response))
    }

    deleteTodo(id){
      return this.http.post("http://localhost:8080/api/deleteTodo/", {'id': id}) .pipe(map((response: Response) =>response.json()))
    }

}
