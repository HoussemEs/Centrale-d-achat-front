import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmplacementService {

  constructor(private http: HttpClient) { }

  getAllEmplacements(){
    return this.http.get("http://localhost:8099/emplacements/getall") .pipe(map((response: Response) => response))
  }


  saveEmplacement(emplacement:any){
    return this.http.post("http://localhost:8099/emplacements/add/",emplacement) .pipe(map((response: Response) => response))
  }

  deleteEmplacement(idEmplacement:any){
    return this.http.delete("http://localhost:8099/emplacements/"+idEmplacement) .pipe(map((response: Response) => response))
  }

}
