import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-demo',
  templateUrl: './custom-pipe-demo.component.html',
  styleUrls: ['./custom-pipe-demo.component.css']
})
export class CustomPipeDemoComponent implements OnInit {

  textData : string;
  constructor() { 
    this.textData="sample";
  }

  ngOnInit() {
  }

}
