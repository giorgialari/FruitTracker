import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from '../_models/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {
  fruits: Fruit[] = []

  private urlGet = '/api/fruit/all';
  private urlGetById = '/api/fruit/';



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient,) { }


  //GetAll fruit  
  getFruit(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.urlGet)
  }
  /** GET fruit by id(DETAIL)*/
  getFruitById(id: number): Observable<Fruit> {
    return this.http.get<Fruit>(this.urlGetById + id);
  }



}
