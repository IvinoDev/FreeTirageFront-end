import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(private http: HttpClient) { }
  getTirage() : Observable<object> {
    return this.http.get("http://localhost:8080/tirage/afficher");
  }

  getNombreTirage(): Observable<object> {
    return this.http.get("http://localhost:8080/tirage/nombre");

  
  }

  api="http://localhost:8080/liste_postulants/creer"
  addListe(libelle:string, file:any, nombre:Number):Observable<void>{
    let data=new FormData();
    data.append("file",file)
    return this.http.post<void>(`${this.api}/${libelle}/${nombre}`, data);
  }

  apiNPT="http://localhost:8080/tirage/nombre_pt"
  getNombrePT(id:number): Observable<object> {
    return this.http.get(`${this.apiNPT}/${id}`);
  }

  getListExist() {
    return this.http.get("http://localhost:8080/liste_postulants/listes");
  }

  withExistList(tirage:any, libelle:string, nombre:number){
    return this.http.post("http://localhost:8080/liste_postulants/ajout_le/" + libelle + "/" + nombre, tirage)
  }

  tirageByList(id: number){
    return this.http.get("http://localhost:8080/tirage/liste/" + id);
  }
} 

