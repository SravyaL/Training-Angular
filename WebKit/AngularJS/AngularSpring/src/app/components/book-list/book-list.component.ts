import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  bookIcon: String;
  cdIcon: String;
  constructor(private bookService: BookService,
    private router:Router ) { 
      this.bookIcon="/assets/book.png";
      this.cdIcon="/assets/CD.png";
    }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(
      data => this.books = data
    );
  }
  showBook(eid){
    this.router.navigateByUrl("/view/"+eid);
  }

}
