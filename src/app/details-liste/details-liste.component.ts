import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListPostulantService } from '../list-postulant.service';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-details-liste',
  templateUrl: './details-liste.component.html',
  styleUrls: ['./details-liste.component.scss']
})
export class DetailsListeComponent implements OnInit {
  tirage: any;
  liste: any;
  id: any;

  constructor( private service: TirageService, private serviceLp: ListPostulantService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  
    this.id = this.activateRoute.snapshot.params["id"];
    this.getTirageByList();
    this.serviceLp.getById(this.id).subscribe(data => {
      console.log(data)
      this.liste = data;
    }); 
   
  }

   getTirageByList() {
      return this.service.tirageByList(this.id).subscribe(data => {
        console.log(data);
        this.tirage = data;
      })
    }



}
