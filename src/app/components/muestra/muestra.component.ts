import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'  
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { CatalogoprodService } from 'src/app/catalogoprod.service';
import { ProductReports } from 'src/productReports';

@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})


export class MuestraComponent implements OnInit  {

  
  filter = {
    field : "title",
    criteria : "",
    filterValue : ""

  };

  element : ProductReports[] = [];
  categories : any[] = [];

  firstName : string = "" ;
  category : string = "";
  opcionSeleccionado : string = "";
  displayedColumns: string[] = ['id', 'title', 'price', 'description' , 'category' , 'image' ];
  dataSource = new MatTableDataSource<ProductReports>(this.element);
  constructor(private service:CatalogoprodService) { }

  ngOnInit() {

    this.getAllProducts();
    this.getAllCategories();
    //this.applyFilterTexto();
    //this.dat aSource.filterPredicate = this.createFilter();

  }
  
    public capturar(){
      let resp = this.service.delimitar_categorias(this.opcionSeleccionado);
      resp.subscribe( report => this.dataSource.data = report as ProductReports[]);

    }
 
  public getAllCategories(){
    let resp = this.service.retornar_categorias();
    //for(var b = 0 ; b < resp.length ;  b ++){}
    resp.forEach(r => {
      var d = r + "";
       var arreglo_cat = d.split(",");
       arreglo_cat.forEach(sep => {
         this.categories.push(sep);
       });

     /* this.categories.push(r);
      console.log(r);*/
    });

  }
 
  public getAllProducts(){
    let resp = this.service.retornar_catalogo();
    resp.subscribe( report => this.dataSource.data = report as ProductReports[]);
  }

  applyFilterCategory(){
    //var filterValue : string = event.target.value;
    this.dataSource.filter = this.category.trim().toLowerCase();
  }
  
  applyFilterTexto(){
    //var filterValue : string = event.target.value;
    this.dataSource.filter = this.firstName.trim().toLowerCase();
  }

/*(keyup)="applyFilterTexto($event.target.value)"*/


}
