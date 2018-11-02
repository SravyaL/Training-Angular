import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../models/book';
@Pipe({
  name: 'typeCount'
})
export class TypeCountPipe implements PipeTransform {

  transform(books: Book[], type:string):number {    
    return books.filter((b)=>b.dept==type).length;  }

}
