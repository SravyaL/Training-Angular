import { Component, OnInit } from '@angular/core';
import { Visitor } from '../model/visitor';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {
  visitor:Visitor
  constructor() { }

  ngOnInit() {
    this.visitor=new Visitor();
  }

}
