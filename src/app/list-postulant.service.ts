import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListPostulantService {

  constructor(/**/ private http:HttpClient) { }
  getListPostulant():Observable<object> {
    return this.http.get("http://localhost:8080/liste_postulants/afficher");
  }
}
