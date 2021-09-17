import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoprodService {

  constructor(private http:HttpClient) { }
  public retornar_catalogo(){
   return this.http.get("http://fakestoreapi.com/products");
  }
}
