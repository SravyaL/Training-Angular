import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  tasks : Task[];
  completedCount : number;
  constructor() { }

  ngOnInit() {
    this.completedCount=0;
    this.tasks=[
      {taskId:101, name:"Buy kg of Sugar",isCompleted:false},
      {taskId:102, name:"Collect clothes",isCompleted:false}
    ];
  }

  handleCompleted(isComplete: boolean){
    if(isComplete){
      this.completedCount++;
    }else{
      this.completedCount--;
    }
  }

  handleAdd(taskName: string){
    let task = new Task();
    task.name = taskName;
    task.taskId = this.tasks[this.tasks.length-1].taskId+1;
    this.tasks.push(task);
  }

}
