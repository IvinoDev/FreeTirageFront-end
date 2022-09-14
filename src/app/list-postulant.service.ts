import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListPostulantService {

  constructor(private http:HttpClient) { }
  getListPostulant():Observable<Object>{
    return this.http.get("http://localhost:8080/liste_postulants/afficher")
  }
}
