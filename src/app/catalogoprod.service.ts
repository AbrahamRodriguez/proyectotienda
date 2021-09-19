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
  
  public retornar_categorias(){
    return this.http.get("http://fakestoreapi.com/products/categories");
  }
  
  public delimitar_categorias(caracter : string){
    var urlProducto : string = "http://fakestoreapi.com/products/category/" + caracter;
    return this.http.get(urlProducto);
  }
}
