import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
export interface selectClause {
  value: number;
  viewValue: string;
}

export interface livraison {
  typeLivraison: number;
  adresseLivraison: string;
  numeroDestinataire
}

export interface paiement {

  methodePaiement: number;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  tp : string;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  livraison : livraison;
  typeLivraison: selectClause[] = [
    {value: 1, viewValue: 'Basic'},
    {value: 2, viewValue: 'Envelement Inclus'},
    {value: 3, viewValue: 'Urgente'}
  ];
  methodePaiement: selectClause[] = [
    {value: 1, viewValue: 'Cash'},
    {value: 2, viewValue: 'Visa ou MasterCard'},
    {value: 3, viewValue: 'Paypal'},
    {value: 4, viewValue: 'D-17'}
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.typeLivraison.push()
    this.firstFormGroup = this._formBuilder.group({
      typeLivraison: ['', Validators.required],
      adresseLivraison: ['', Validators.required],
      numeroDestinataire: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      methodePaiement: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }
  checkSelect(){
    console.log(this.firstFormGroup.value);
    this.livraison.adresseLivraison = this.firstFormGroup.value.adresseLivraison;
    this.livraison.numeroDestinataire = this.firstFormGroup.value.numeroDestinataire;
    this.livraison.typeLivraison = this.firstFormGroup.value.typeLivraison;
  }
}
