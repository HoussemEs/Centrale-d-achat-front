import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  constructor(private http: HttpClient) { }

  RequestTrackDelivery(value:any){
    return this.http.get("http://localhost:8099/tracking/multi/"+value) .pipe(map((response: Response) => response))
  }

  FillSuggestionsList(value:any){
    return this.http.get("http://localhost:8099/tracking/nom/"+value) .pipe(map((response:Response) => response))
  }

  FillSuggestionsListWithAll() {
    return this.http.get("http://localhost:8099/tracking/getall") .pipe(map((response:Response) => response))
  }
}
