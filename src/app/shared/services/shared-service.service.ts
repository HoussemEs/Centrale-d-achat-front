import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private jwtHelper: JwtHelperService){}
  public getToken(): string {
    return localStorage.getItem('token');
  }
  public getUsername(): string {
    return localStorage.getItem('username');
  }
}
