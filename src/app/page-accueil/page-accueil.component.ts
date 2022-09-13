import { Component, OnInit } from '@angular/core';
import { ListPostulantService } from '../list-postulant.service';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  listPostulant: any;
  nombreTirage: any;
  nombreListe: any;
  p:number=1;
  searchText:any;

constructor( private service : ListPostulantService, private tservice : TirageService) { }

  ngOnInit(): void { 
    this.service.getListPostulant().subscribe(data =>{ 
      console.log(data);
      this.listPostulant = data;
    });

    this.tservice.getNombreTirage().subscribe(data =>{ 
      console.log(data);
      this.nombreTirage = data;

    });

    this.service.getNombreListe().subscribe(data =>{
      console.log(data);
      this.nombreListe = data;
    });
  }

}
