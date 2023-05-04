import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor(private http:HttpClient){}

  getEmployeeList() {
    return this.http.get("http://localhost:8099/employees").pipe(map((response : Response) => response))
  }

}
