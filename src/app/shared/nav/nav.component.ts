import { Component } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../services/AuthService';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
    settingsIcon = faGear;
    searchIcon = faSearch;
    text="";

    constructor(private route: ActivatedRoute, private router: Router, private userAuth : AuthService ) { }

    supportClient(){
      //console.log("entered");
      this.text = (<HTMLInputElement>document.getElementById("search_txt")).value;
      let url = '';
      if(!(this.router.url.includes("support"))){
        url = this.router.url;
        this.router.navigate(['support/'+this.text]);
      }else{
        this.router.navigateByUrl(url, { skipLocationChange: true }).then(() => {
          this.router.navigate(['support/'+this.text]);
      });
      }
    }
    public isLoggedIn() {
      return this.userAuth.isAuthenticated();
    }
    public logout() {
      this.userAuth.clear();
      this.router.navigate(['/login']);
    }
}
