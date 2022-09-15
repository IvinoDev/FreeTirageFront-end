import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  nombre: any;
  msg:string="";
  lists:any;
  message:string="";

  constructor(private service : TirageService, private formB:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllLists();
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
    //console.log(e.target['files'][0].name+" "+ e.target['files'][0].length)
  }
  importerliste(){
    console.log(this.nombre)
    this.liste=this.formmodule.value
    this.service.addListe(this.liste.libelle, this.fichier, this.nombre).subscribe(
      data=>{
        console.log(data)
        this.msg = "Tirage effectué avec succès.";
        this.formmodule.reset()
      }
      
    )
  }

  getAllLists(){
    return this.service.getListExist().subscribe(data=>{
      console.log(data);
      
      this.lists = data;
    })
  }

  addWithExistList(form: NgForm){
    return this.service.withExistList(form.value, form.value.lists, form.value.nbrPersonnes).subscribe(data => {
      this.message = "Tirage effectué avec succès.";
    });

  }


}
