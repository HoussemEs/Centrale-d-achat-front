import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  roles = [ 'USER', 'ADMIN', 'FOURNISSEUR']
  user = {
    userName: "",
    userPassword: "",
    userFirstName: "",
    userLastName: "",
    userCin: "",
    userEmail: "",
    userAdress: "",
    userPhone : ""
  };

  constructor(private userService:UserService){
  }
  onSubmit() {
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log(data);
        // handle successful user creation here
      },
      (error) => {
        console.log(error);
        // handle error here
      }
    );
  }

}
