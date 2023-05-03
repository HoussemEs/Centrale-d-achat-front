import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactureComponent } from './core/facture/facture.component';
import { PaiementComponent } from './core/paiement/paiement.component';
import { DeliveryComponent } from './core/delivery/delivery.component';
import { TrackDeliveryComponent } from './core/tracking/track-delivery/track-delivery.component';
import { CheckoutComponent } from './core/checkout/checkout.component';
import { DetailComponent } from './core/facture/detail/detail.component';
import { SupportComponent } from './core/support/support.component';
import { TestComponent } from './core/test/test.component';
import { ShopComponent } from './core/shop/shop.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { HomeComponent } from './core/shop/home/home.component';
import { AboutComponent } from './core/shop/about/about.component';
import { ErrorComponent } from './shared/error/error.component';
import { HistoryComponent } from './core/shop/history/history.component';
import { HistoryDetailComponent } from './core/shop/history/history-detail/history-detail.component';
import { CurrencyComponent } from './core/currency/currency.component';
import { EmpCallenderComponent } from './core/emp-callender/emp-callender.component';
import { ChargeComponent } from './core/charge/charge.component';
import { ImpotComponent } from './core/impot/impot.component';

const routes: Routes = [
  {path:"facture",component:FactureComponent},
  {path:"paiement",component:PaiementComponent},
  {path:"delivery",component:DeliveryComponent},
  {path:"paiement",component:PaiementComponent},
  {path:"tracking",component:TrackDeliveryComponent},
  {path:"currency",component:CurrencyComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"support/:text",component:SupportComponent},
  {path:"test",component:TestComponent},
  {path:"shop",component:ShopComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"facture/detail/:factid",component:DetailComponent},
  {path:"Empcalender",component:EmpCallenderComponent},
  {path:"charge",component:ChargeComponent},
  {path:"impot",component:ImpotComponent},



  {path: 'shop',component: ShopComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'history/:username', component: HistoryComponent },
      { path: 'history/detail/:idcommande', component: HistoryDetailComponent },
    ]},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
