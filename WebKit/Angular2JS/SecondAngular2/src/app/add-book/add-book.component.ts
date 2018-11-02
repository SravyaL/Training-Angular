import { Component, OnInit } from '@angular/core';
import { Book } from 'app/book';
import { BookStoreService } from 'app/book-store.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookStoreService : BookStoreService;
  book : Book;
  msg : string;
  dop : string;

  constructor(bookStoreService : BookStoreService) { 
    this.bookStoreService=bookStoreService;
    this.book = new Book();
    this.msg ="";
    this.dop = this.book.pubDate.toISOString().substring(0,10);
  }

  ngOnInit() {
  }

  updateDOP(){
    this.book.pubDate=new Date(this.dop);
  }
  
  add(){
    this.bookStoreService.add(this.book);
    this.msg = "Your book "+this.book.bcode+" is added";
    this.book = new Book();
    this.dop = this.book.pubDate.toISOString().substring(0,10);
  }
}
