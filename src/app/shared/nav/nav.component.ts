import { Component } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router} from '@angular/router';

import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css','../../assets/css/app.css']
})
export class NavComponent {
    toggleIcon = faList;
    settingsIcon = faGear;
    searchIcon = faSearch;
    text="";
    constructor(private route: ActivatedRoute, private router: Router) { }
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

    collapse(){
      console.log(document.getElementById("sidebar").classList.contains('collapse'));
      if(document.getElementById("sidebar").classList.contains('collapse')){
        document.getElementById("sidebar").classList.remove('collapse');
        document.getElementById("body_admin").style.paddingLeft='19%';
        document.getElementById("sidebar_toggle").style.marginLeft='20%';
      }else{
        document.getElementById("sidebar").classList.add('collapse');
        document.getElementById("body_admin").style.paddingLeft='3%';
        document.getElementById("sidebar_toggle").style.marginLeft='2%';
      }
    }
}
