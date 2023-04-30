import { Component } from '@angular/core';
import { PaiementService } from 'src/app/shared/services/paiement.service';


@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent {
  listPaiements:any=[];
  constructor(private paiementService : PaiementService){}

  ngOnInit(){
    this.paiementService.getAllPaiements().subscribe(data => this.listPaiements = data);
  }
}
