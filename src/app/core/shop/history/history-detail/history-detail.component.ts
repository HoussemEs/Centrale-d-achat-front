import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactureServiceService } from 'src/app/shared/services/facture-service.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})
export class HistoryDetailComponent {
  idCommande: any;
  idFact: any;
  listCommandes: any=[];
  total=0;
  detailGeneral: any;
  all: any;
  constructor(private ar:ActivatedRoute, private factureService: FactureServiceService){}

  ngOnInit(){
    this.ar.params.subscribe(s=> this.idCommande = s["idcommande"])
    this.factureService.getFactureByCommande(this.idCommande).subscribe(data =>{
      this.all= data;
      this.idFact = this.all.factureId;
      this.factureService.getDetailCommande(this.idFact).subscribe(df=> {this.detailGeneral = df;});
      this.factureService.getDetailFacture(this.idFact).subscribe(d=> {
        this.listCommandes = d;
        // determine the total price
        this.listCommandes.forEach(ar => {
          this.total = this.total + (ar.prixArticle * ar.quantite);
        });
      });
    });
  }
}
