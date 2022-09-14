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
  addListe(libelle:string, file:any, nombre:number=0):Observable<void>{
    let data=new FormData();
    data.append("file",file)
    return this.http.post<void>(`${this.api}/${libelle}/${nombre}`, data);
  }

  apiNPT="http://localhost:8080/tirage/nombre_pt"
  getNombrePT(id:number): Observable<object> {
    return this.http.get(`${this.apiNPT}/${id}`);
  }
} 

