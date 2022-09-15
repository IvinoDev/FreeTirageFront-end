import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';
@Component({
  selector: 'app-details-tirage',
  templateUrl: './details-tirage.component.html',
  styleUrls: ['./details-tirage.component.scss']
})
export class DetailsTirageComponent implements OnInit {
    tirage: any;

  constructor( private service: TirageService) { }

  ngOnInit(): void {
    this.service.getTirage().subscribe(data=>{
      console.log(data);
      this.tirage = data;
    })
  }
  }


