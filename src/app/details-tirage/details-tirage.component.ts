import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-details-tirage',
  templateUrl: './details-tirage.component.html',
  styleUrls: ['./details-tirage.component.scss']
})
export class DetailsTirageComponent implements OnInit {

  id = 0;
  nombrePostulantsTires = 0;

  constructor(private service: TirageService) { }

  ngOnInit(): void {
    // this.service.getNombrePT(this.id).subscribe(data => {
    //   console.log(data);
    //   this.nombrePostulantsTires = data;
    // }) 
  }

}
