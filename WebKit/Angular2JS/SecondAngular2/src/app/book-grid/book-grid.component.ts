import { Component, OnInit } from '@angular/core';
import { BookStoreService } from 'app/book-store.service';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.css']
})
export class BookGridComponent implements OnInit {

  bookStoreService : BookStoreService;

  constructor(bookStoreService : BookStoreService) { 
    this.bookStoreService=bookStoreService;
  }

  ngOnInit() {
  }

}
