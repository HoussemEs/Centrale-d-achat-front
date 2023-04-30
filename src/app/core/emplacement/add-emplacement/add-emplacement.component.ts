import { Component } from '@angular/core';
import { EmplacementService } from 'src/app/shared/services/emplacement.service';

export interface Emplacement{
  nomEmplacement:string,
  adresseEmplacement:string,
  gouvernorat:string,
}

@Component({
  selector: 'app-add-emplacement',
  templateUrl: './add-emplacement.component.html',
  styleUrls: ['./add-emplacement.component.css']
})
export class AddEmplacementComponent {
  emp:Emplacement={
    nomEmplacement:'',
    adresseEmplacement:'',
    gouvernorat:''
  };


  constructor(private emplacementService:EmplacementService){}

  sendData(){
    console.log(this.emp);
    this.emplacementService.saveEmplacement(this.emp).subscribe(d=> {
      console.log(d);
    },error => console.log(error));
  }

}
