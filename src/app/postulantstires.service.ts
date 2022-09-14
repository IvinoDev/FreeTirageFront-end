import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulantstiresService {

  constructor(private http: HttpClient) { }
  getPostulantstires() : Observable<object> {
    return this.http.get("http://localhost:8080/tirage/afficher/1");
  }
} 