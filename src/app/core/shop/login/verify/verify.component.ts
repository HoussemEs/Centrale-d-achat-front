import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { error } from 'jquery';
import { timeout } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {

  activateToken:any;
  err : any;
  
  constructor(private activatedRoute : ActivatedRoute, private userService: UserService, private router:Router){}
ngOnInit(){
  this.activatedRoute.params.subscribe(s => { this.activateToken=s['activateToken'] });

  console.log(this.activateToken);
 if(this.activateToken !== null){
    this.err = this.userService.verifyAccount(this.activateToken).subscribe({
      next: () =>  {
        Swal.fire('Sucess','Your account has been verified, please login!','success');
        console.log("ok");
        this.router.navigate(['/login']);
    },
      error :(e) => {
        {  
           if (e.status === 400){
          Swal.fire({
            title: 'Your token is invalid or has been expired',
            text: 'Try logging in or registering again !',
            icon: 'error',
            showCancelButton: false,
            confirmButtonText: 'Ok !'})
            console.log(e.status);
            this.router.navigate(['/login']);
          }

          else  { 
            Swal.fire('Sucess','Your account has been verified, please login!','success');
          console.log("ok");
            this.router.navigate(['/login']); 
            }
          }
        }
      }
      );
    } 

    else {
    console.log("Wrong url")
    this.router.navigate(['/unauthorized']);
    }

}
}
