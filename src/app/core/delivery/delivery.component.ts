import { Component } from '@angular/core';
import { DeliveryService } from 'src/app/shared/services/delivery.service';


import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith} from 'rxjs/operators';
import {map} from 'rxjs/operators';
import { LivreurService } from 'src/app/shared/services/livreur.service';



@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  listDeliveries:any=[];
  detailedList: any=[];
  options=[];

  value="";
  myControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  optionss:any=[];

  constructor(private deliveryService : DeliveryService, private livreurService:LivreurService){}

  ngOnInit(){
    this.livreurService.FillSuggestionsListWithAll().subscribe(data => {
      this.optionss = data;
      this.optionss.forEach(l =>  this.options.push(l.nomLivreur));
      // console.log(this.optionss);
      this.filteredOptions = this.myControl.valueChanges.pipe(
        map(val => this.filter(val))
      );
      this.filteredOptions.subscribe((e) => {
        // console.log(e);
      });
    });
    this.deliveryService.getDeliveries().subscribe(data => {
      this.listDeliveries = data;
      this.listDeliveries.forEach(delivery => {
        this.deliveryService.getDeliveryDetails(delivery.livraisonId).subscribe(details => {this.detailedList.push(details);})
      });
    });
  }

  getSuggestions(){
    this.options=[];
    this.value = (<HTMLInputElement>document.getElementById("nomLivreur")).value;
    // console.log(this.value);
    if(this.value!=''){
      this.livreurService.FillSuggestionsList(this.value).subscribe(data2 => {
        this.optionss = data2;
        // console.log(this.optionss);
        this.optionss.forEach(l =>  this.options.push(l.nomLivreur))
      });
    }else{
      this.livreurService.FillSuggestionsListWithAll().subscribe(data2 => {
        this.optionss = data2;
        // console.log(data2 +"  //// "+this.optionss);
        this.optionss.forEach(l =>  this.options.push(l.nomLivreur))
      });
    }
  }


  filter(val: string): string[] {
    return this.options.filter(option => typeof option === 'string' && option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }


}
