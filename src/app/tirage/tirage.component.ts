import { Component, OnInit } from '@angular/core';
import { ListPostulantService } from '../list-postulant.service';
import { ListPostulant } from '../list-postulant';
import { TirageService } from '../tirage.service';
import { Tirage } from '../tirage';
@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {

  tirage:Tirage= new Tirage();
  tirages!:Tirage[];
  nbr:any;
  libelleTirage:any;
  tirer:any;
   liste:any;
  listPostulants!: any;
  constructor(private tirageService:TirageService,private listeService : ListPostulantService) { }

  ngOnInit(): void {
  //this.getListPostulant();
  
 
    this.tirageService.getTirage().subscribe(data => {this.listPostulants})
  
  
    this.listeService.getListPostulant().subscribe(data => {
        console.log(data)
      this.listPostulants =data
    } ); 
    // this.tirageService.creertirage(this.tirage,this.tirer,this.tirage.nombre).subscribe(data=>{
    //   console.log(data);
    //    },
    //    error=>console.log(error)
    // );
  }
  onsubmit(){
    this.tirage.libelle=this.libelleTirage;
    this.tirage.nombre=this.nbr;
    console.log(this.tirer)
    console.log(this.tirage.nombre)

    this.tirageService.creertirage(this.tirage,this.tirer,this.tirage.nombre).subscribe(data=>{
    
       })
  }
  }
      
     
  
  // onSubmit(){
  //   console.log();
  // }


