import { Component } from '@angular/core';

@Component({
  selector: 'custom-tag',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'my-first-app';
  message: string;
  names: string[];

  constructor(){
    this.message = "Hello all!";
    this.names=["First","Second","Third"];
  }

  changeMsg(): void{
    //this.message="Welcome to new session";
    this.names.push("Fourth");
  }
}
