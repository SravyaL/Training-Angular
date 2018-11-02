import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Book} from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl:string;
  constructor(private http:Http) {
   
    this.baseUrl="http://localhost:9191/books";
   }

   getAllBooks():Observable<Book[]>{
     return this.http.get(this.baseUrl).pipe(
      map((data)=>data.json())
     );
   }
   getBook(eid):Observable<Book>{
    return this.http.get(this.baseUrl + "/" +eid).pipe(
     map((data)=>data.json())
    );
  }
  deleteBook(eid):Observable<Response>{
    return this.http.delete(this.baseUrl + "/" +eid);
  }

  getJsonContactTypeHeader():RequestOptions{
    const headers= new Headers();
    headers.append('Content-Type','application/json');
    return new RequestOptions({headers:headers}); // {key : value}
  }
  addBook(book:Book):Observable<Book>{    // for communicating 
    let url=this.baseUrl;
    let content = JSON.stringify(book);//converting json to string
    let headers=this.getJsonContactTypeHeader();
    return this.http.post(url,content,headers).pipe( //post method gives updated book
      map(data=>data.json()));
    }

    updateBook(book:Book):Observable<Book>{    // for telling that we are communicating
      let url=this.baseUrl;
      let content = JSON.stringify(book);//converting json to string
      let headers=this.getJsonContactTypeHeader();
      return this.http.put(url,content,headers).pipe( //put method gives updated book
        map(data=>data.json()));
      }


  }

