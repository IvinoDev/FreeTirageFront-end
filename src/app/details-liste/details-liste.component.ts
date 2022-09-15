import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-details-liste',
  templateUrl: './details-liste.component.html',
  styleUrls: ['./details-liste.component.scss']
})
export class DetailsListeComponent implements OnInit {
<<<<<<< HEAD
   tirage: any;
=======
  tirage: any;
>>>>>>> a80a28433a2d4fccc3e33e3dbb82ffe49b52d8d0

  constructor( private service: TirageService) { }

  ngOnInit(): void {
    this.service.getTirage().subscribe(data=>{
      console.log(data);
      this.tirage = data;
    })
  }
}
