import { Component, OnInit } from '@angular/core';
import { ListPostulantService } from '../list-postulant.service';
import { ListPostulant } from '../list-postulant';
@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {

  listPostulants!: ListPostulant[]
  constructor(private listeService : ListPostulantService) { }

  ngOnInit(): void {
    this.getListPostulant();
  }
  getListPostulant(){
    this.listeService.getListPostulant().subscribe(data => this.listPostulants)
  }
   
  

}
