import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListPostulant } from './list-postulant';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListPostulantService {

<<<<<<< HEAD
  constructor(private http:HttpClient) { }
  getListPostulant(): Observable<ListPostulant[]>{
    return this.http.get<[]>("http://localhost:8080/liste_postulants/liste")
=======
  constructor(private http: HttpClient) { }
  getListPostulant() : Observable<object> {
    return this.http.get("http://localhost:8080/liste_postulants/afficher");
  }

  getNombreListe() : Observable<object> {
    return this.http.get("http://localhost:8080/liste_postulants/nombre");
>>>>>>> a80a28433a2d4fccc3e33e3dbb82ffe49b52d8d0
  }
}
