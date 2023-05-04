import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { error } from 'jquery';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor(private http: HttpClient) {
  }


  getAvailableBackups(){
    return this.http.get("http://localhost:8099/backups/show") .pipe(map((response: Response) => response))
  }

  deleteDatabase(){
    return this.http.get("http://localhost:8099/backups/delete") .pipe(map((response: Response) => response))
  }

  updateDatabase(filename:any){
    return this.http.get("http://localhost:8099/backups/restore/"+filename) .pipe(map((response: Response) => response))
  }

  getFactureHealth(){
    return this.http.get("http://localhost:8099/backups/health/facture") .pipe(map((response: Response) => response))
  }

  getReplication() {
    return this.http.get("http://localhost:8099/backups/health/replication") .pipe(map((response: Response) => response))
  }

  addError(type:any){
    return this.http.get("http://localhost:8099/backups/health/error/g/"+type) .pipe(map((response: Response) => response))
  }

  getErrors(type:any){
    return this.http.get("http://localhost:8099/backups/health/request/"+type) .pipe(map((response: Response) => response))
  }


}
