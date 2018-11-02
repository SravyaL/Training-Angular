import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  logoUrl:string;
  constructor(){
    this.title="Book Store App";
    this.logoUrl="../assets/logo_bookstore_1x.png"
  }
}
