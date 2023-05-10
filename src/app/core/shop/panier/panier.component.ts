import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  constructor(
    private panierService: PanierService
  ) { }

 
}


