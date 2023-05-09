import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './core/facture/facture.component';
import { PaiementComponent } from './core/paiement/paiement.component';
import { DeliveryComponent } from './core/delivery/delivery.component';
import { TrackDeliveryComponent } from './core/tracking/track-delivery/track-delivery.component';
import { CheckoutComponent } from './core/checkout/checkout.component';
import { DetailComponent } from './core/facture/detail/detail.component';
import { SupportComponent } from './core/support/support.component';
<<<<<<< Updated upstream
import { TestComponent } from './core/test/test.component';
import { ShopComponent } from './core/shop/shop.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { HomeComponent } from './core/shop/home/home.component';
import { AboutComponent } from './core/shop/about/about.component';
import { ErrorComponent } from './shared/error/error.component';
import { HistoryComponent } from './core/shop/history/history.component';
import { HistoryDetailComponent } from './core/shop/history/history-detail/history-detail.component';
=======
import { AddProduitComponent } from './core/produit/add-produit/add-produit.component';
import { ProduitComponent } from './core/produit/produit.component';
import { AddmarqueComponent } from './core/marque/addmarque/addmarque.component';
import { AddCategorieComponent } from './core/categorie/add-categorie/add-categorie.component';
import { MarqueComponent } from './core/marque/marque.component';
import { UpdatemarqueComponent } from './core/marque/updatemarque/updatemarque.component';
import { CategorieComponent } from './core/categorie/categorie.component';
import { UpdateCategorieComponent } from './core/categorie/update-categorie/update-categorie.component';
import { EditproduitComponent } from './core/produit/editproduit/editproduit.component';
>>>>>>> Stashed changes

const routes: Routes = [
  {path:"facture",component:FactureComponent},
  {path:"paiement",component:PaiementComponent},
  {path:"delivery",component:DeliveryComponent},
  {path:"paiement",component:PaiementComponent},
  {path:"tracking",component:TrackDeliveryComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"support/:text",component:SupportComponent},
  {path:"facture/detail/:factid",component:DetailComponent},
  {path:"produit/addproduit", component: AddProduitComponent},
  {path:"produits",component:ProduitComponent},
  {path: 'marques/add-marque', component: AddmarqueComponent},
  {path: 'add-categorie', component: AddCategorieComponent},
  {path: 'marques', component: MarqueComponent},
  {path: 'marques/update-marque/:id', component: UpdatemarqueComponent},
  {path: 'categories', component: CategorieComponent},
  {path: 'categories/update-categorie/:id', component: UpdateCategorieComponent},
  {path: 'produits/update/:id', component: EditproduitComponent}

  




  // {path:"/home",component:ProductsComponent},
  // {path:"/home",component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
