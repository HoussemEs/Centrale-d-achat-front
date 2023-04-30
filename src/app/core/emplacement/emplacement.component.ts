import { Component } from '@angular/core';
import { EmplacementService } from 'src/app/shared/services/emplacement.service';

@Component({
  selector: 'app-emplacement',
  templateUrl: './emplacement.component.html',
  styleUrls: ['./emplacement.component.css']
})
export class EmplacementComponent {
  listemplacement:any=[];
  constructor(private emplacementService: EmplacementService){}

  ngOnInit(){
    this.emplacementService.getAllEmplacements().subscribe(d => {
      this.listemplacement=d;
    })
  }

  deleteEmplacement(idEmplacement:any){
    this.emplacementService.deleteEmplacement(idEmplacement).subscribe(d=>{});
  }

}
