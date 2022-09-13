import { Component, OnInit } from '@angular/core';
import { ListPostulantService } from '../list-postulant.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  listPostulant: any;

constructor( private service : ListPostulantService) { }

  ngOnInit(): void { 
    this.service.getListPostulant().subscribe(data =>{ 
      console.log(data);
    this.listPostulant = data;
    });
  }

}
