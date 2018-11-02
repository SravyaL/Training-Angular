import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  taskName : string;
  @Output() add:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.taskName="";
  }
  doAddTask(){
    this.add.emit(this.taskName);
    this.taskName="";
  }

}
