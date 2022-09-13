import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-details-liste',
  templateUrl: './details-liste.component.html',
  styleUrls: ['./details-liste.component.scss']
})
export class DetailsListeComponent implements OnInit {
  tirage: any;

  constructor( private service: TirageService) { }

  ngOnInit(): void {
    this.service.getTirage().subscribe(data=>{
      console.log(data);
      this.tirage = data;
    })
  }

}
