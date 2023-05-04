import { Component, OnInit } from '@angular/core';
import { EmplacementService } from 'src/app/shared/services/emplacement.service';

@Component({
  selector: 'app-emplacement',
  templateUrl: './emplacement.component.html',
  styleUrls: ['./emplacement.component.css']
})
export class EmplacementComponent implements OnInit {

  emplacements:any = [];
  emplacement:any = {};
  isUpdate:boolean = false;

  constructor(private emplacementService: EmplacementService) { }

  ngOnInit() {
    this.getAllEmplacements();
  }

  getAllEmplacements(){
    this.emplacementService.getAllEmplacements().subscribe((response:any)=>{
      console.log(this.emplacements)
      this.emplacements = response;
    })
  }

  updateEmplacement(){
    this.emplacementService.updateEmplacement(this.emplacement.emplacementId, this.emplacement).subscribe((response:any)=>{
      this.getAllEmplacements();
      this.emplacement = {};
      this.isUpdate = false;
    })
  }

  deleteEmplacement(emplacementId:any){
    this.emplacementService.deleteEmplacement(emplacementId).subscribe((response:any)=>{
      this.getAllEmplacements();
    })
  }

  editEmplacement(emplacement:any){
    this.emplacement = {...emplacement};
    this.isUpdate = true;
  }

  resetForm(){
    this.emplacement = {};
    this.isUpdate = false;
  }
}