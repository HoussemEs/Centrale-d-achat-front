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
import { HealthComponent } from './core/health/health.component';
import { BackupsComponent } from './core/health/backups/backups.component';
import { DepartementComponent } from './core/departement/departement.component';
import { EmplacementComponent } from './core/emplacement/emplacement.component';
import { AddEmployeeComponent } from './core/employee/add-employee/add-employee.component';
import { AddEmplacementComponent } from './core/emplacement/add-emplacement/add-emplacement.component';
import { EditEmplacementComponent } from './core/emplacement/edit-emplacement/edit-emplacement.component';
import { EmplacementDetailComponent } from './core/emplacement/emplacement-detail/emplacement-detail.component';
import { DepartementDetailComponent } from './core/departement/departement-detail/departement-detail.component';

const routes: Routes = [
  {path:"health",component:HealthComponent},
  {path:"health/backups",component:BackupsComponent},
  {path:"facture",component:FactureComponent},
  {path:"paiement",component:PaiementComponent},
  {path:"delivery",component:DeliveryComponent},
  {path:"paiement",component:PaiementComponent},
  {path:"tracking",component:TrackDeliveryComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"support/:text",component:SupportComponent},
  {path:"test",component:TestComponent},
  {path:"shop",component:ShopComponent},
  {path:"departement",component:DepartementComponent},
  {path:"employee",component:EmplacementComponent},
  {path:"employee/de/:idEmpDep",component:DepartementDetailComponent},
  {path:"employee/add/:idEmp/:idDep",component:AddEmployeeComponent},
  {path:"emplacement",component:EmplacementComponent},
  {path:"emplacement/add",component:AddEmplacementComponent},
  {path:"emplacement/edit/:idEmp",component:EditEmplacementComponent},
  {path:"emplacement/dp/:idEmp",component:EmplacementDetailComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"facture/detail/:factid",component:DetailComponent},
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
