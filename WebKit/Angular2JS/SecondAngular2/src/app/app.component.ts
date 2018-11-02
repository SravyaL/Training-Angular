import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title : string;
  version :number;
  adminEmail : string;
  contacNumbers : string[];

  constructor(){
    this.title="Vamsy's Web Workshop";
    this.version = 1.245;
    this.contacNumbers = ["9052224753","9550204753"];
    this.adminEmail="a.vamc.it@gmail.com";
  }

}
