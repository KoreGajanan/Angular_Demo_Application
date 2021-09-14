import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellouspipe'
})
export class MarvellouspipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any
   {
    let str = value;

    if(args[0]== "Marvellous")
    {
        str += "Educating for better tomorrow";
    }
    return str;
  }

}
