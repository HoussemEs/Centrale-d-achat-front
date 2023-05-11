import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  username: any;
  lplist: any=[];
  total=0;
  constructor(private ar:ActivatedRoute, private panierService: PanierService){}

  ngOnInit(){
    this.total=0;
    this.username=localStorage.getItem('username');
    this.panierService.getLPbyUser(this.username).subscribe(data =>{
      this.lplist= data;
      console.log(this.lplist);
      this.lplist.forEach(ar => {
        if(ar.status==-1){
          this.total = this.total + (ar.prixArticle * ar.quantite);
        }
      });

    });
  }

  changeStatus(idc:any,pr:any){
    console.log(idc);
    this.panierService.updateStatus(idc).subscribe(d=> {
      //console.log(d);
      this.ngOnInit();});
  }


}


