import { Component } from '@angular/core';
import { faBook, faCartShopping, faM, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
<<<<<<< Updated upstream
=======
import { faBrain } from '@fortawesome/free-solid-svg-icons';


>>>>>>> Stashed changes

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  private constructor() {  }
  status = 1;
  userIcon = faUser;
  commandeIcon = faCartShopping;
  factureIcon = faEnvelope;
  deliveryIcon = faTruckFast;
  paiementIcon = faMoneyBill;
  searchIcon = faSearch;
<<<<<<< Updated upstream
=======
  produitIcon=faMotorcycle;
  categoryIcon=faBook;
  marqueIcon=faM;
>>>>>>> Stashed changes
  openNav() {
    if(document.getElementById("mySidenav").style.width == "60px"){
      document.getElementById("sidenav_btn").style.paddingLeft = "270px";
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("sidenav_text1").style.visibility = "visible";
      document.getElementById("sidenav_text2").style.visibility = "visible";
      document.getElementById("sidenav_text3").style.visibility = "visible";
      document.getElementById("sidenav_text4").style.visibility = "visible";
      document.getElementById("sidenav_text5").style.visibility = "visible";
      document.getElementById("sidenav_text6").style.visibility = "visible";
      document.getElementById("sidenav_text7").style.visibility = "visible";
      document.getElementById("sidenav_text8").style.visibility = "visible";
      document.getElementById("sidenav_text9").style.visibility = "visible";



    }else{
      document.getElementById("mySidenav").style.width = "60px";
      document.getElementById("sidenav_btn").style.paddingLeft = "80px";
      document.getElementById("sidenav_text1").style.visibility = "hidden";
      document.getElementById("sidenav_text2").style.visibility = "hidden";
      document.getElementById("sidenav_text3").style.visibility = "hidden";
      document.getElementById("sidenav_text4").style.visibility = "hidden";
      document.getElementById("sidenav_text5").style.visibility = "hidden";
      document.getElementById("sidenav_text6").style.visibility = "hidden";
      document.getElementById("sidenav_text7").style.visibility = "hidden";
      document.getElementById("sidenav_text8").style.visibility = "hidden";
      document.getElementById("sidenav_text9").style.visibility = "hidden";


    }
  }

}
