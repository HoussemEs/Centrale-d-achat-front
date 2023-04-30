import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import decode, { InvalidTokenError } from 'jwt-decode';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable()
export class AuthService {

  constructor(private jwtHelper: JwtHelperService){}
  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean indicating whether or not the token is expired
    return this.jwtHelper.isTokenExpired(token);
  }

}
