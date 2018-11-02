import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import {Book} from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
book:Book;
  constructor(private bookService:BookService,
    private activatedRoute:ActivatedRoute,private router:Router)
     { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        let eid =params['eid'];
       
        this.bookService.getBook(eid).subscribe(
          (data)=>this.book=data);
      }
    )
  }
  doEdit(){ 
    this.router.navigateByUrl("/edit/"+this.book.eid);
  }

  doDelete(){ if(confirm("Are you sure in deleting"+" "+this.book.name +"?")){
    this.bookService.deleteBook(this.book.eid).subscribe(
      (resp)=>{
        if(resp.ok){
          this.router.navigateByUrl("/");
        }
      }
    );
  }

  }
}
