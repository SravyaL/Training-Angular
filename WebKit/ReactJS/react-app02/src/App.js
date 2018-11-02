import React, { Component } from 'react';
import Header from './Header.js';
import TaskView from './TaskView';
import './App.css';
//import './index.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      title: 'Task Manager',
      tasks:[
        {taskId:101, name:'Pay Course Fee', isDone:false,priority:'high'},
        {taskId:102, name:'Watch Netflix', isDone:false,priority:'low'},
        {taskId:103, name:'Make notes', isDone:false,priority:'normal'},
        {taskId:104, name:'Buy groceries', isDone:false,priority:'normal'},
        {taskId:105, name:'Finish reading', isDone:false,priority:'normal'},
        {taskId:106, name:'Submit Assignment', isDone:false,priority:'high'}
      ],
      taskReport:{
        complete:0,
        high:2,
        low:1,
        normal:3
      }
    };
  }
  handleIsDoneChange(taskId, status){
   let modifiedTasks = this.state.tasks;
   let modifiedTaskReport = this.state.taskReport;
   modifiedTasks.find((t)=>t.taskId==taskId).isDone=status;
   //modifiedTaskReport.complete=modifiedTasks.find((t)=>t.isDone).length;
   modifiedTaskReport.complete=0;
   modifiedTasks.forEach((t)=>{
     if(t.isDone) modifiedTaskReport.complete++;
   })
   this.setState({tasks:modifiedTasks});
   this.setState({taskReport:modifiedTaskReport});
  }
  handleChangePriority(taskId, status){
    let modifiedTasks = this.state.tasks;
    let modifiedTaskReport = this.state.taskReport;
    let ind = modifiedTasks.findIndex((t)=>t.taskId==taskId);
    
    if(modifiedTasks[ind].priority=='high')
      modifiedTasks[ind].priority='normal';
    else if(modifiedTasks[ind].priority=='normal')
      modifiedTasks[ind].priority='low';
    else
       modifiedTasks[ind].priority='high';

    modifiedTaskReport.high=0;
    modifiedTaskReport.normal=0;
    modifiedTaskReport.low=0;
    
    modifiedTasks.forEach((t)=>{
      if(t.priority==='high') modifiedTaskReport.high++;
      else if(t.priority==='normal') modifiedTaskReport.normal++;
      else modifiedTaskReport.low++;
    })
    this.setState({tasks:modifiedTasks});
    this.setState({taskReport:modifiedTaskReport});

  }
  markdone(){
    let modifiedTasks = this.state.tasks;
    let modifiedTaskReport = this.state.taskReport;
    modifiedTaskReport.complete=0;
    modifiedTasks.forEach((t)=>{
      t.isDone = true;
      if(t.isDone) modifiedTaskReport.complete++;
    })
    this.setState({tasks:modifiedTasks});
    this.setState({taskReport:modifiedTaskReport});
  }

  markundone(){
    let modifiedTasks = this.state.tasks;
    let modifiedTaskReport = this.state.taskReport;
    modifiedTaskReport.complete=0;
    modifiedTasks.forEach((t)=>{

      t.isDone = false;
      
     
      
    })
    this.setState({tasks:modifiedTasks});
    this.setState({taskReport:modifiedTaskReport});
  }
  render() {
    return (
      <React.Fragment>
      <Header title={this.state.title}/>
      <div>
        <span className="badge"> High Priority Tasks: {this.state.taskReport.high}</span>
        <span className="badge"> Normal Priority Tasks: {this.state.taskReport.normal}</span>
        <span className="badge"> Low Priority Tasks: {this.state.taskReport.low}</span>
        <span className="badge"> Completed Tasks: {this.state.taskReport.complete} / {this.state.tasks.length}</span>
        <button className="badgeBtn" onClick={this.markdone.bind(this)}>Mark All Done</button>
        <button className="badgeBtn" onClick={this.markundone.bind(this)}>Mark All Undone</button>

      </div>
      {
        this.state.tasks.map(
          (task,i)=>
          <TaskView task = {task} key = {i}
          isDoneChange={this.handleIsDoneChange.bind(this)}
          changePriority = {this.handleChangePriority.bind(this)}/>
        )
      }
      </React.Fragment>
    );
  }
}

export default App;
