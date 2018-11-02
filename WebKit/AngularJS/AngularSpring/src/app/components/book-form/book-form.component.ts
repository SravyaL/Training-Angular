import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  book: Book;
  isEdit: boolean;
  constructor(private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }//req bookservice to be injected

  ngOnInit() {
    this.book = new Book();
    this.isEdit = false;
    this.activatedRoute.params.subscribe(
      (params) => {
        let eid = params['eid'];
        if (eid) {
          this.isEdit = true;
          this.bookService.getBook(eid).subscribe(
            (data) => this.book = data
          );
        }
      }
    )
  }
  saveBook() {
    if (this.isEdit) {
      this.bookService.updateBook(this.book).subscribe(
        (data) => this.router.navigateByUrl("/")
      );
    } else {
      this.bookService.addBook(this.book).subscribe(
        (data) => this.router.navigateByUrl("/")
      );
    }
  }
}
