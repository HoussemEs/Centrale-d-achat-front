import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor( private http: HttpClient ) { }
  createPanier(userId:string){
    return this.http.post("http://localhost:8099/panier/createpanier",+userId) .pipe(map((response: Response) => response))
  }
}
