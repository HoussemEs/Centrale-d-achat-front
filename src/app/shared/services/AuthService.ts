import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import decode, { InvalidTokenError } from 'jwt-decode';
import {JwtHelperService} from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.service';
@Injectable()
export class AuthService {

  public currentUser: Observable<User>;
  public loginstatus:boolean = true;

  private currentUserSubject: BehaviorSubject<User>;

  constructor(private jwtHelper: JwtHelperService){
  }


  //Get token frol local storage
  
  public getToken(): string {
    return localStorage.getItem('token');
  }


  //Check if the user is still logged in

  public isAuthenticated(): boolean {
    return this.getRoles() && this.getToken()!== null ;
    }

    
  //Set roles in local storage
    
  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }


  //Get roles from local storage

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles'));
  }


  //Set Token in local storage

  public setToken(jwtToken: string) {
    localStorage.setItem('token', jwtToken);
  }


  //Clear local storage for logout

  public clear() {
    localStorage.clear();
  }


}
