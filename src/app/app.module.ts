import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './common.service';
import { FormsModule } from '@angular/forms';
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
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    PaiementComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule,FormsModule, FontAwesomeModule, MatStepperModule, BrowserAnimationsModule
  ],
  providers: [CommonService,FactureServiceService,AuthService,JwtHelperService,LivreurService,PaiementService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
