import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl:string;
  constructor(private http:Http) {
   
    this.baseUrl="http://localhost:8585/books";
   }
   getAllBooks():Observable<Book[]>{
     return this.http.get(this.baseUrl).pipe(
      map((data)=>data.json())
     );
   }
}
