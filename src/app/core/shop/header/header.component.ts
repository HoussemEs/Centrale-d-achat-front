import { Component } from '@angular/core';
import * as $ from 'jquery';
declare const jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../../assets/css/style.css','../../../assets/css/bootstrap.css',
              '../../../assets/css/font-awesome.min.css','../../../assets/css/responsive.css']
})
export class HeaderComponent {
  username ="";
  ngOnInit(){
    this.username=localStorage.getItem("username");

    jQuery.noConflict();
    jQuery(document).ready(function(){
      jQuery('#customCarousel1').carousel();
    });
    this.executeMethods();
  }

  carousel1(){
    document.getElementById("carousel_indicator1").classList.add("active");
    document.getElementById("carousel1").classList.add("active");

    document.getElementById("carousel_indicator2").classList.remove("active");
    document.getElementById("carousel2").classList.remove("active");
    document.getElementById("carousel_indicator3").classList.remove("active");
    document.getElementById("carousel3").classList.remove("active");
    document.getElementById("carousel_indicator4").classList.remove("active");
    document.getElementById("carousel4").classList.remove("active");
    document.getElementById("carousel_indicator5").classList.remove("active");
    document.getElementById("carousel5").classList.remove("active");
  }
  carousel2(){
    document.getElementById("carousel_indicator2").classList.add("active");
    document.getElementById("carousel2").classList.add("active");

    document.getElementById("carousel_indicator1").classList.remove("active");
    document.getElementById("carousel1").classList.remove("active");
    document.getElementById("carousel_indicator3").classList.remove("active");
    document.getElementById("carousel3").classList.remove("active");
    document.getElementById("carousel_indicator4").classList.remove("active");
    document.getElementById("carousel4").classList.remove("active");
    document.getElementById("carousel_indicator5").classList.remove("active");
    document.getElementById("carousel5").classList.remove("active");
  }
  carousel3(){
    document.getElementById("carousel_indicator3").classList.add("active");
    document.getElementById("carousel3").classList.add("active");


    document.getElementById("carousel_indicator1").classList.remove("active");
    document.getElementById("carousel1").classList.remove("active");
    document.getElementById("carousel_indicator2").classList.remove("active");
    document.getElementById("carousel2").classList.remove("active");
    document.getElementById("carousel_indicator4").classList.remove("active");
    document.getElementById("carousel4").classList.remove("active");
    document.getElementById("carousel_indicator5").classList.remove("active");
    document.getElementById("carousel5").classList.remove("active");
  }
  carousel4(){
    document.getElementById("carousel_indicator4").classList.add("active");
    document.getElementById("carousel4").classList.add("active");

    document.getElementById("carousel_indicator1").classList.remove("active");
    document.getElementById("carousel1").classList.remove("active");
    document.getElementById("carousel_indicator2").classList.remove("active");
    document.getElementById("carousel2").classList.remove("active");
    document.getElementById("carousel_indicator3").classList.remove("active");
    document.getElementById("carousel3").classList.remove("active");
    document.getElementById("carousel_indicator5").classList.remove("active");
    document.getElementById("carousel5").classList.remove("active");
  }
  carousel5(){
    document.getElementById("carousel_indicator5").classList.add("active");
    document.getElementById("carousel5").classList.add("active");

    document.getElementById("carousel_indicator1").classList.remove("active");
    document.getElementById("carousel1").classList.remove("active");
    document.getElementById("carousel_indicator2").classList.remove("active");
    document.getElementById("carousel2").classList.remove("active");
    document.getElementById("carousel_indicator3").classList.remove("active");
    document.getElementById("carousel3").classList.remove("active");
    document.getElementById("carousel_indicator4").classList.remove("active");
    document.getElementById("carousel4").classList.remove("active");
  }

  executeMethods() {
    let count = 0;
    const interval = setInterval(() => {
      switch (count) {
        case 0:
          this.carousel1();
          break;
        case 1:
          this.carousel2();
          break;
        case 2:
          this.carousel3();
          break;
        case 3:
          this.carousel4();
          break;
        case 4:
          this.carousel5();
          break;
      }
      count = (count + 1) % 5;
    }, 5000);
  }

}
