import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {
  strData : string;
  numData : number;
  dateData : Date;
  array : number[];

  constructor() { }

  ngOnInit() {
    this.strData = "This is a demo string";
    this.numData = 1234567.890;
    this.dateData = new Date();
    this.array = [1,2,3,4,5,6,7,8,9,10];
  }

}
