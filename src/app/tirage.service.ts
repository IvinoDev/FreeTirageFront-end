import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tirage } from './tirage';

=======


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
>>>>>>> a80a28433a2d4fccc3e33e3dbb82ffe49b52d8d0

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(private http: HttpClient) { }
<<<<<<< HEAD
  getTirage() : Observable<any> {
    return this.http.get("http://localhost:8080/tirage/afficher");
  }
  // CreerTirage(tirage:Tirage): Observable<object> {
  //   return this.http.get("http://localhost:8080/liste_postulants/creer/{{libelle}}/{{nombre}}");
  // }
=======
  getTirage() : Observable<object> {
    return this.http.get("http://localhost:8080/tirage/afficher");
  }
>>>>>>> a80a28433a2d4fccc3e33e3dbb82ffe49b52d8d0

  getNombreTirage(): Observable<object> {
    return this.http.get("http://localhost:8080/tirage/nombre");
    
  }
<<<<<<< HEAD
  creertirage( tirage:Tirage, libelle:String, nombre:number){
    return this.http.post( `http://localhost:8080/liste_postulants/${libelle}/${nombre}`,tirage)
  }
=======
>>>>>>> a80a28433a2d4fccc3e33e3dbb82ffe49b52d8d0
} 

