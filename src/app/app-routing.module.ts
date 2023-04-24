import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './core/facture/facture.component';
import { PaiementComponent } from './core/paiement/paiement.component';
import { DeliveryComponent } from './core/delivery/delivery.component';
import { TrackDeliveryComponent } from './core/tracking/track-delivery/track-delivery.component';
import { CheckoutComponent } from './core/checkout/checkout.component';
import { DetailComponent } from './core/facture/detail/detail.component';

const routes: Routes = [
  {path:"facture",component:FactureComponent},
  {path:"paiement",component:PaiementComponent},
  {path:"delivery",component:DeliveryComponent},
  {path:"paiement",component:PaiementComponent},
  {path:"tracking",component:TrackDeliveryComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"facture/detail/:factid",component:DetailComponent}
  // {path:"/home",component:ProductsComponent},
  // {path:"/home",component:ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
