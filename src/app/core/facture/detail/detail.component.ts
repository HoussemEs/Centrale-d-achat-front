import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  first='bonjour';
  idFact: any;
  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(s => { this.idFact = s });
  }
  changeFirst(){
    this.first=(<HTMLInputElement>document.getElementById("first")).value;
    console.log(this.first);
  }
}
