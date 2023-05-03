import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthService {

  constructor(private http: HttpClient) { }

  getAvailableBackups(){
    return this.http.get("http://localhost:8099/backups/show") .pipe(map((response: Response) => response))
  }

  deleteDatabase(){
    return this.http.get("http://localhost:8099/backups/delete") .pipe(map((response: Response) => response))
  }

  updateDatabase(filename:any){
    return this.http.get("http://localhost:8099/backups/restore/"+filename) .pipe(map((response: Response) => response))
  }
}
