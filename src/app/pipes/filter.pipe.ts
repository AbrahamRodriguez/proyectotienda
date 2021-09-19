import { Pipe, PipeTransform } from '@angular/core';
import { ProductReports } from 'src/productReports';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ProductReports[], args: any): any {
    /*if( arg === '' || arg.length < 3) return value;
    const resutlPosts = [];
    for(var p  in value){
      if(p.title.toLowerCase()){}

    }*/
    return null;
  }

}
