import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes-demo',
  templateUrl: './built-in-pipes-demo.component.html',
  styleUrls: ['./built-in-pipes-demo.component.css']
})
export class BuiltInPipesDemoComponent implements OnInit {

  textData : string;
  numericData : number;
  dateData : Date;

  constructor() { 
    this.textData="Soem Text to display";
    this.numericData = 13.456789;
    this.dateData = new Date();
  }

  ngOnInit() {
  }

}
