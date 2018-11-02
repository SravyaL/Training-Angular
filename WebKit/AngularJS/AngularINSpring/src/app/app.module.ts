import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { PathLocationStrategy } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';

const paths :Routes=[
  {path:'',component:BookListComponent},
  {path:'add',component:BookFormComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookFormComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpModule,RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
