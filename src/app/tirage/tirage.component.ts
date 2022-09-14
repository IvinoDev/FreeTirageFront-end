import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {

  formmodule!:FormGroup;
  file:any;
  fichier:any;
  liste: any;
  nombre: number = 0;

  constructor(private service : TirageService, private formB:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.formmodule=this.formB.group({
      libelle:['', Validators.required],
      libelletirage:['', Validators.required],
      nombre:['', Validators.required],
      dateListePostulant:['', Validators.required],
      file:['', Validators.required],
    })
  }

  fileChange(e:any){
    this.fichier=e.target["files"][0]
    console.log(e.target['files'][0].name+" "+ e.target['files'][0].length)
  }
  importerliste(){
    this.liste=this.formmodule.value
    this.service.addListe(this.liste.libelle, this.fichier, this.nombre).subscribe(
      data=>{
        console.log(data)
        this.formmodule.reset()
      }
      
    )
  }

}
