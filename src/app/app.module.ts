import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AuthService } from './shared/services/auth.service';
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
import { TestComponent } from './core/test/test.component';
import { DeliveryService } from './shared/services/delivery.service';
import { ShopComponent } from './core/shop/shop.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { HeaderComponent } from './core/shop/header/header.component';
import { FooterComponent } from './core/shop/footer/footer.component';
import { HomeComponent } from './core/shop/home/home.component';
import { AboutComponent } from './core/shop/about/about.component';
import { ErrorComponent } from './shared/error/error.component';
import { HistoryComponent } from './core/shop/history/history.component';
import { HistoryDetailComponent } from './core/shop/history/history-detail/history-detail.component';
import { SharedService } from './shared/services/shared-service.service';
import { EmplacementService } from './shared/services/emplacement.service';
import { EmplacementComponent } from './core/emplacement/emplacement.component';
import { AddEmplacementComponent } from './core/emplacement/add-emplacement/add-emplacement.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { HealthComponent } from './core/health/health.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BackupsComponent } from './core/health/backups/backups.component';
import { HealthService } from './shared/services/health.service';
import { EditEmplacementComponent } from './core/emplacement/edit-emplacement/edit-emplacement.component';
import { DepartementComponent } from './core/departement/departement.component';
import { EmployeeComponent } from './core/employee/employee.component';
import { AddEmployeeComponent } from './core/employee/add-employee/add-employee.component';
import { departementService } from './shared/services/departement.service';
import { EmployeeService } from './shared/services/employee.service';
import { DepartementDetailComponent } from './core/departement/departement-detail/departement-detail.component';
import { EmplacementDetailComponent } from './core/emplacement/emplacement-detail/emplacement-detail.component';
import { PerformanceComponent } from './core/employee/performance/performance.component';
import { PerformanceService } from './shared/services/performance.service';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';
import { CurrencyComponent } from './core/currency/currency.component';
import { ImpotComponent } from './core/impot/impot.component';
import { ChargeComponent } from './core/charge/charge.component';
import { AddEditChargeComponent } from './core/charge/add-edit-charge/add-edit-charge.component';
import { AddEditCurrencyComponent } from './core/currency/add-edit-currency/add-edit-currency.component';
import { AddEditImpotComponent } from './core/impot/add-edit-impot/add-edit-impot.component';
import { EmpCallenderComponent } from './core/emp-callender/emp-callender.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ScheduleModule , RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { MatDialogModule } from '@angular/material/dialog';
import { ImpotService } from './shared/services/impot.service';
import { CoreService } from './shared/services/core.service';
import { ChargeService } from './shared/services/charge.service';
import { CurrencyService } from './shared/services/currency.service';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { AbsenceComponent } from './core/absence/absence.component';
import { AbsenceService } from './shared/services/absence.service';


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
    HealthComponent,
    BackupsComponent,
    EditEmplacementComponent,
    DepartementComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    DepartementDetailComponent,
    EmplacementDetailComponent,
    PerformanceComponent,
    ImpotComponent,
    ChargeComponent,
    CurrencyComponent,
    AddEditChargeComponent,
    AddEditCurrencyComponent,
    AddEditImpotComponent,
    EmpCallenderComponent,
    AbsenceComponent
  ],
  imports: [
    BrowserModule,CommonModule,HttpClientModule,AppRoutingModule,FormsModule, FontAwesomeModule, ReactiveFormsModule,
    MatStepperModule, BrowserAnimationsModule, MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,
    FormsModule,MatAutocompleteModule,NgApexchartsModule,NgxSpinnerModule, MatInputModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,
    MatAutocompleteModule,MatToolbarModule,MatIconModule,MatButtonModule,MatDialogModule,
    MatInputModule,MatRadioModule,MatSelectModule,MatTableModule,MatPaginatorModule,MatSortModule,
    MatSnackBarModule,MatFormFieldModule,ScheduleModule,RecurrenceEditorModule
  ],
  providers: [FactureServiceService,AuthService,JwtHelperService,LivreurService,
    PaiementService,MatDatepickerModule,DeliveryService,SharedService,EmplacementService,HealthService,
    departementService,EmployeeService,PerformanceService,CurrencyService,CoreService,ChargeService,AbsenceService,
    ImpotService,DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService,
    TimelineViewsService, TimelineMonthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
