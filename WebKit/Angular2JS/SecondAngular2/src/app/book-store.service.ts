import { Injectable } from '@angular/core';
import { Book } from 'app/book';

@Injectable()
export class BookStoreService {

  bookStore : Book[];

  constructor() { 
    this.bookStore =[];
  }

  add(book : Book){
    this.bookStore.push(book);
  }

  remove( bookIndex : number){
    this.bookStore.splice(bookIndex,1);
  }

  update( book : Book){
    let bookIndex = -1;
    for(let i=0;i<this.bookStore.length;i++){
      if(this.bookStore[i].bcode===book.bcode){
        bookIndex=i;
        break;
      }
    }

    if(bookIndex>-1){
      this.bookStore[bookIndex] = book;
    }
  }
}
