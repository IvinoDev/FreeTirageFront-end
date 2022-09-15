import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tirage } from './tirage';


@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(private http: HttpClient) { }
  getTirage() : Observable<any> {
    return this.http.get("http://localhost:8080/tirage/afficher");
  }
  // CreerTirage(tirage:Tirage): Observable<object> {
  //   return this.http.get("http://localhost:8080/liste_postulants/creer/{{libelle}}/{{nombre}}");
  // }

  getNombreTirage(): Observable<object> {
    return this.http.get("http://localhost:8080/tirage/nombre");
    
  }
  creertirage( tirage:Tirage, libelle:String, nombre:number){
    return this.http.post( `http://localhost:8080/liste_postulants/${libelle}/${nombre}`,tirage)
  }
} 

