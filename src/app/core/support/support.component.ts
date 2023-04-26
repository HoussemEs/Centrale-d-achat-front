import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type Help = {
    compName:String,
    routeToComponent:String,
    description:String
  };

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
    search="";

    help:Help={
      compName:"",
      routeToComponent:"",
      description:""
    };
    listHelp:Help[]=[];
    constructor(private activatedRoute: ActivatedRoute){}
    ngOnInit(){
      this.activatedRoute.params.subscribe(s => { this.search=s['text'] });
      console.log(this.search);
      if(this.search.includes("facture")){
        this.help.compName = 'Liste Factures';
        this.help.description = 'Consulter tous les factures, chercher une facture spécifique, chercher par date ou client etc..';
        this.help.routeToComponent='/facture';
        this.listHelp.push(this.help);
        console.log("supposedly cards have been displayed");
      }else{
        console.log("else");
      }
    }
}
