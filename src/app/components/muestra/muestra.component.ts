import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'  
import { stringify } from 'querystring';
import { CatalogoprodService } from 'src/app/catalogoprod.service';
import { ProductReports } from 'src/productReports';



@Component({
  selector: 'app-muestra',
  templateUrl: './muestra.component.html',
  styleUrls: ['./muestra.component.css']
})


export class MuestraComponent implements OnInit {
  element : ProductReports[] = [];
  firstName : string = "" ;
  displayedColumns: string[] = ['id', 'title', 'price', 'description' , 'category' , 'image' ];
  dataSource = new MatTableDataSource<ProductReports>(this.element);
  constructor(private service:CatalogoprodService) { }

  ngOnInit() {

    this.getAllProducts();
  }
  public getAllProducts(){
    let resp = this.service.retornar_catalogo();
    resp.subscribe( report => this.dataSource.data = report as ProductReports[]);
  }

  
   applyFilterTexto(filterValue: string){
    //var filterValue : string = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
