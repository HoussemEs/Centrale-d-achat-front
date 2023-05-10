import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/AuthService';
import { UserService } from 'src/app/shared/services/user.service';
import {  } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   userName:any;
   userPassword:any;

  constructor(private userService:UserService,private router:Router, private authService:AuthService)
  {}

  login() {
    this.userService.authenticate(this.userName, this.userPassword).subscribe(
      // response c'est la response du spring
      (response: any) => {
        this.authService.setRoles(response.user.role);
        this.authService.setToken(response.jwtToken);
    
        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/back/admin']);
        } else {
          this.router.navigate(['/shop']);
        }
      },
      (error) => {
        if (error === 200)
        console.log(error);
        else
        alert('Invalid email or password. Please try again.');
      }
    );
}
}