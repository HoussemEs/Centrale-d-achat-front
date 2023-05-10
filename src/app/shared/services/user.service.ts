import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './AuthService';


export interface Role {
  roleName: string;
  roleDescription:string;
}

export interface User{
  userName:string,
  userPassword:string
  role: Role[];
}
export interface jwtresponse{
  user:User,
  jwtToken:string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseUrl='http://localhost:8099';

  role : Role = {
    roleName :"",
    roleDescription :""
  }
  user : User =
    {
      userName: "",
      userPassword:"",
      role: [this.role]
    };

    jwtres : jwtresponse = 
    {
      user: this.user,
      jwtToken:""
    };


  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

   httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    })
};

  constructor(private httpClient:HttpClient, private authService: AuthService) {
  }

  //Login

  authenticate(userName: string, userPassword: string) {
    this.user.userName=userName;
    this.user.userPassword=userPassword;
    const url = `${this.baseUrl}/authenticate`;
      return this.httpClient.post(url,this.user,{headers : this.requestHeader,})
  }


//Clear the local storage

  logout() {
    return this.authService.clear();
  }


//Register new user

  addUser(user: any) {
    return this.httpClient.post(`${this.baseUrl}/registerNewUser`, user,{headers : this.requestHeader,});

  }


//Display users

  showuser() {
    return this.httpClient.get(`${this.baseUrl}/users`);
  }


//Change User role

  addRoleToUser(roleName: string, userName: string) {
    return this.httpClient.put(`${this.baseUrl}/addRole/${roleName}/${userName}`,null);
  }


  //Delete User

   deleteUser(useraName : string) {
    return this.httpClient.delete(`${this.baseUrl}/delete/${useraName}`,{observe: 'response'});
  }



//Compares a list of user roles to a list of allowed roles

 roleMatch(allowedRoles): boolean {
  let isMatch = false;
  const userRoles: any = this.authService.getRoles();

  if (userRoles != null && userRoles) {
    for (let i = 0; i < userRoles.length; i++) {
      for (let j = 0; j < allowedRoles.length; j++) {
        if (userRoles[i].roleName === allowedRoles[j]) {
          isMatch = true;
        } 
      }
    }  return isMatch;
  } else return isMatch;
}

//Verify user by email

verifyAccount(activateToken){
  return this.httpClient.put(`${this.baseUrl}/activate/${activateToken}`,null,{headers : this.requestHeader,});
}




}