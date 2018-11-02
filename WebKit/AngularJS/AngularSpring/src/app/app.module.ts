import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PathLocationStrategy } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookViewComponent } from './components/book-view/book-view.component';
import { TypeCountPipe } from './pipes/type-count.pipe';

const paths :Routes=[
  {path:'',component:BookListComponent},
  {path:'view/:eid',component:BookViewComponent},
  {path:'add',component:BookFormComponent},
  {path:'edit/:eid',component:BookFormComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent,
    BookViewComponent,
    TypeCountPipe
  ],
  imports: [
    BrowserModule,FormsModule, HttpModule,RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
