import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http: HttpClient) { }

  getAllPaiements(){
    return this.http.get("http://localhost:8099/billing/payments-f") .pipe(map((response: Response) => response))
  }

}
