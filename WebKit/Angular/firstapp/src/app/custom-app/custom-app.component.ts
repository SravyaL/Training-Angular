import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-app',
  templateUrl: './custom-app.component.html',
  /*template:`<div>
  <h1>This is from template </h1>
  </div>`,*/
  styleUrls: ['./custom-app.component.css']
})
export class CustomAppComponent implements OnInit {
  name: string;
  a:number;
  b:number;
  marks:number[];
  employees:any[];
  constructor() { 
    this.name = "First";
    this.a=20;
    this.b=30;
    this.marks=[24,35,45,56,78];
    this.employees=[
      {name:"First",age:25,basic:2500},
      {name:"Second",age:35,basic:3500},
      {name:"Third",age:45,basic:4500},
      {name:"Fourth",age:55,basic:5500}
    ];
  }
  showMsg(): string{
    return ("Hello"+this.name);
  }

  ngOnInit() {
  }

}
