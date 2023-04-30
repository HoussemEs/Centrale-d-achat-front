import { Component } from '@angular/core';
import { FactureServiceService } from 'src/app/shared/services/facture-service.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent {

  listFactures:any=[];
  sFacture;
  plusIcon = faPlusCircle;

  constructor(private factureService: FactureServiceService) {   }

  ngOnInit(){
    this.factureService.getFactures().subscribe(data => this.listFactures = data);
  }

}
