import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivreurService {

  constructor(private http: HttpClient) { }

  RequestTrackDelivery(value:any){
    return this.http.get("http://localhost:8099/tracking/multi/"+value) .pipe(map((response: Response) => response))
  }
}
