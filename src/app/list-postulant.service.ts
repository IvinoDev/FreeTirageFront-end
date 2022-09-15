import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListPostulant } from './list-postulant';

@Injectable({
  providedIn: 'root'
})
export class ListPostulantService {

  constructor(private http:HttpClient) { }
  getListPostulant(): Observable<ListPostulant[]>{
    return this.http.get<[]>("http://localhost:8080/liste_postulants/liste")
  }
}
