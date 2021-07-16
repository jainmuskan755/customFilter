import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if(!value) return [];

    if(!args) return value;
    
    args = args.toString().toLowerCase();
    if( value ){
      return value.filter( ele => (ele.toString().toLowerCase().indexOf(args) > -1 )  );
    }
  }
}
