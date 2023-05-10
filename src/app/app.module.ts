import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './shared/nav/nav.component';
import { FactureComponent } from './core/facture/facture.component';
import { FactureAvoirComponent } from './core/facture-avoir/facture-avoir.component';
import { DeliveryComponent } from './core/delivery/delivery.component';
import { RetourComponent } from './core/retour/retour.component';
import { FactureServiceService } from './shared/services/facture-service.service';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './shared/services/tokenInterceptor';
import { AuthService } from './shared/services/authService';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { TrackDeliveryComponent } from './core/tracking/track-delivery/track-delivery.component';
import { LivreurService } from './shared/services/livreur.service';
import { PaiementService } from './shared/services/paiement.service';
import { PaiementComponent } from './core/paiement/paiement.component';
import { MatStepperModule } from '@angular/material/stepper';
// import { MatFormField } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutComponent } from './core/checkout/checkout.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './core/facture/detail/detail.component';
import { SupportComponent } from './core/support/support.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProduitComponent } from './core/produit/add-produit/add-produit.component';
import { ProduitComponent } from './core/produit/produit.component';
import { ProduitService } from './shared/services/produit.service';
import { AddmarqueComponent } from './core/marque/addmarque/addmarque.component';
import { MarqueService } from './shared/services/marque.service';
import { AddCategorieComponent } from './core/categorie/add-categorie/add-categorie.component';
import { CategorieComponent } from './core/categorie/categorie.component';
import { CategorieService } from './shared/services/categorie.service';
import { MarqueComponent } from './core/marque/marque.component';
import { UpdatemarqueComponent } from './core/marque/updatemarque/updatemarque.component';
import { UpdateCategorieComponent } from './core/categorie/update-categorie/update-categorie.component';
import { EditproduitComponent } from './core/produit/editproduit/editproduit.component';
import { NgxPaginationModule, PaginationControlsComponent, PaginationControlsDirective } from 'ngx-pagination';
import { TestComponent } from './core/test/test.component';
import { ShopComponent } from './core/shop/shop.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { HeaderComponent } from './core/shop/header/header.component';
import { FooterComponent } from './core/shop/footer/footer.component';
import { HomeComponent } from './core/shop/home/home.component';
import { AboutComponent } from './core/shop/about/about.component';
import { ErrorComponent } from './shared/error/error.component';
import { HistoryComponent } from './core/shop/history/history.component';
import { HistoryDetailComponent } from './core/shop/history/history-detail/history-detail.component';
import { EmplacementComponent } from './core/emplacement/emplacement.component';
import { AddEmplacementComponent } from './core/emplacement/add-emplacement/add-emplacement.component';
import { DeliveryService } from './shared/services/delivery.service';
import { EmplacementService } from './shared/services/emplacement.service';
import { Marque } from './shared/models/marque';
import { PrComponent } from './core/shop/pr/pr.component';
import { PanierComponent } from './core/shop/panier/panier.component';
import { PanierService } from './shared/services/panier.service';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FactureComponent,
    FactureAvoirComponent,
    DeliveryComponent,
    RetourComponent,
    SidebarComponent,
    TrackDeliveryComponent,
    PaiementComponent,
    CheckoutComponent,
    DetailComponent,
    SupportComponent,
    TestComponent,
    ShopComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    HistoryComponent,
    HistoryDetailComponent,
    EmplacementComponent,
    AddEmplacementComponent,
    ProduitComponent,
    AddProduitComponent,
    MarqueComponent,
    AddmarqueComponent,
    CategorieComponent,
    AddCategorieComponent,
    EditproduitComponent,
    UpdateCategorieComponent,
    UpdatemarqueComponent,
    PrComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,CommonModule,HttpClientModule,AppRoutingModule,FormsModule, FontAwesomeModule, ReactiveFormsModule,
    MatStepperModule, BrowserAnimationsModule, MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,
    FormsModule,MatAutocompleteModule,NgxPaginationModule
  ],
  providers: [FactureServiceService,AuthService,JwtHelperService,LivreurService,
    PaiementService,MatDatepickerModule,DeliveryService,EmplacementService,PanierService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
