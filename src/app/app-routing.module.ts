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
import { AdminComponent } from './core/admin/admin.component';
import { LoginComponent } from './core/shop/login/login.component';
import { RegisterComponent } from './core/shop/register/register.component';
import { AuthGuard } from './shared/services/auth.guard';
import { VerifyComponent } from './core/shop/login/verify/verify.component';
import { BackComponent } from './core/back/back.component';

const routes: Routes = [

  {path: 'back', component: BackComponent,canActivate:[AuthGuard], data:{roles:['Admin']},
  children: [
    {path:'admin',component:AdminComponent,},
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
    {path:"dashboard",component:DashboardComponent},
    {path:"facture/detail/:factid",component:DetailComponent},

  ]},
  {
    path:'login',
    component:LoginComponent  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {path:"unauthorized",component:ErrorComponent},

  {path:"verify/:activateToken",component:VerifyComponent},



  {path: 'shop',component: ShopComponent, canActivate:[AuthGuard], data:{roles:['User']},

    children: [
    
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'history/:username', component: HistoryComponent },
      { path: 'history/detail/:idcommande', component: HistoryDetailComponent },

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
