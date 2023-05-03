import { Component } from '@angular/core';
import { HealthService } from 'src/app/shared/services/health.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Route, Router } from '@angular/router';
import { delay } from 'rxjs';


@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  listBackups: any;
  progress ="";
  constructor(private healthService:HealthService,private spinner: NgxSpinnerService, private route:Router){}

  ngOnInit(){
    this.healthService.getAvailableBackups().subscribe(d=>{
      this.listBackups = d;
      console.log(this.listBackups);
    })
  }

  recoverDatabase(filename:any){
    this.progress="Initiating Database Recovery..";
    this.spinner.show();
    this.healthService.updateDatabase(filename).subscribe(d=>{
      this.wait(5000);
      this.spinner.hide();
      this.route.navigate['/dashboard'];
    },error => console.log(error));
  }


 /* yourFunction = async () => {
    await delay(5000);
    console.log("Waited 5s");

    await delay(5000);
    console.log("Waited an additional 5s");
  };*/

  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
}
