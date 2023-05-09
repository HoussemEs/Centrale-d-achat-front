import { Component } from '@angular/core';
import { FactureServiceService } from 'src/app/shared/services/facture-service.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ProduitService } from 'src/app/shared/services/produit.service';
import { Produit } from 'src/app/shared/models/produit';
import { saveAs } from 'file-saver';
import { Papa } from 'ngx-papaparse';



@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  listProduits:any=[];
  produit:any;
  produitToDelete:any;
  selectedProduit:any;
  
  
  plusIcon = faPlusCircle;
  p = 1;

  constructor(private produitService: ProduitService, private papa: Papa) {   }

  ngOnInit(){
    this.produitService.getAllProducts().subscribe(data => this.listProduits = data);
    this.p = 1; // set current page to 1
   
  }

  
  




  

  downloadCSV() {
    const csvData = this.papa.unparse(this.listProduits, {
      delimiter: ";",
      newline: "\r\n",
      quotes: true,
      header: true
    });
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'product-list.csv');
  }

  convertToCSV(data) {
    const separator = ',';
    const keys = Object.keys(data[0]);
    const csvHeader = keys.join(separator) + '\n';
    const csvBody = data.map((item) => {
      return keys.map((key) => {
        return item[key];
      }).join(separator);
    }).join('\n');

    return csvHeader + csvBody;
  }
  deleteProduit(produit: any) {
    this.produitToDelete = produit;
    this.produitService.deleteProduit(produit.articleId)
      .subscribe(() => {
        console.log('Article deleted successfully');
        this.listProduits = this.listProduits.filter(m => m.articleId !== produit.articleId);
      }, error => {
        console.error('Error deleting Article', error);
      });
  }
  selectProduit(produit: any) {
    this.selectProduit = produit;
  }

  
  

}
