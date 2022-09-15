import { Component, OnInit } from '@angular/core';
import { PostulantstiresService } from '../postulantstires.service';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-details-tirage',
  templateUrl: './details-tirage.component.html',
  styleUrls: ['./details-tirage.component.scss']
})
export class DetailsTirageComponent implements OnInit {

  id = 0;
  nombrePostulantsTires = 0;
  postulanttires!:any;

  constructor(private service: TirageService, private afficher:PostulantstiresService) { }

  ngOnInit(): void {
    // this.service.getNombrePT(this.id).subscribe(data => {
    //   console.log(data);
    //   this.nombrePostulantsTires = data;
    // }) 
    
    this.afficher.getTotalPostulanttires().subscribe(data =>{
      this.postulanttires = data
      console.log(data);

    })
  }

}
