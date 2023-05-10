import { Component } from '@angular/core';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'app-pr',
  templateUrl: './pr.component.html',
  styleUrls: ['./pr.component.css']
})
export class PrComponent {
  listProduits:any=[];
  constructor(private produitService: ProduitService, private panierService : PanierService) {   }

  ngOnInit(){
    this.produitService.getAllProducts().subscribe(data => this.listProduits = data);
 console.log(this.listProduits)  ;

}

addToCart() {
  // Check if the flag exists in the local storage
  const panierCreated = localStorage.getItem('panierCreated');
  const userId = "admin123";


  if (!panierCreated) {
    // Call the createPanier method to create the panier for the user
    this.panierService.createPanier(userId).subscribe(() => {
      // Set the flag in the local storage
      localStorage.setItem('panierCreated', 'true');
    });
  }
}
}
