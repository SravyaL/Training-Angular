import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import TaskView from './TaskView.js';
import ReactDom from  'react-dom';
import DummyCompo from './DummyCompo.js'

class App extends Component {
  constructor(){
    super();
    this.state={
      title:'Task Manager',
      tasks:[
        {taskId: 101, name: 'Pay Course Fee', isDone:false, priority:'high'},
        {taskId: 102, name: 'Watch Latest FunBucket Episode',isDone:false, priority:'low'},
        {taskId: 103, name: 'Update the lecture notes', isDone:false, priority:'normal'},
        {taskId: 104, name: 'Submit Lab02 Record', isDone:false, priority:'normal'},
        {taskId: 105, name: 'Submit Lab03 Record', isDone:false, priority:'normal'},
        {taskId: 106, name: 'Should call my parents atleast today', isDone:false, priority:'high'},
      ],
      taskReport:{
        complete:0,
        high:2,
        low:1,
        normal:3
      }
    };
   this.markAll = this.markAll.bind(this);
   }
   updateTaskName(tnm,taskId)
   {
    let modifiedTasks= this.state.tasks;
    modifiedTasks.find((t) => t.taskId===taskId).name=tnm;
    this.setState({tasks:modifiedTasks});
   }
  handleIsDoneChange(itemId,status){
    let modifiedTasks= this.state.tasks;
    let modifiedTaskReport= this.state.taskReport;

    modifiedTasks.find((t) => t.taskId===itemId).isDone=status;
    modifiedTaskReport.complete=0;
    modifiedTasks.forEach((t)=>{
      if(t.isDone) 
      modifiedTaskReport.complete++;
    }
    )
   
    
    this.setState({tasks:modifiedTasks});
    this.setState({taskReport:modifiedTaskReport});
  }

  handleChangePriority(taskId){
    let modifiedTasks= this.state.tasks;
    let modifiedTaskReport= this.state.taskReport;

    let ind=modifiedTasks.findIndex((t)=>t.taskId===taskId);

    if(modifiedTasks[ind].priority==='high')
    modifiedTasks[ind].priority='normal';    
    else if(modifiedTasks[ind].priority==='normal')
    modifiedTasks[ind].priority='low'; 
    else 
    modifiedTasks[ind].priority='high'; 

    modifiedTaskReport.high=0;
    modifiedTaskReport.normal=0;
    modifiedTaskReport.low=0;

    modifiedTasks.forEach((t)=>{
      if(t.priority==='high') modifiedTaskReport.high++;
      else if(t.priority==='low') modifiedTaskReport.low++;
      else modifiedTaskReport.normal++;
    }
    )
   
    
    this.setState({tasks:modifiedTasks});
    this.setState({taskReport:modifiedTaskReport});
      
  }
markAll(status){
  let modifiedTasks= this.state.tasks;
  let modifiedTaskReport= this.state.taskReport;
  modifiedTasks.forEach((t)=>{t.isDone=status;});
  modifiedTaskReport.complete=status?modifiedTasks.length:0;

  this.setState({tasks:modifiedTasks});
  this.setState({taskReport:modifiedTaskReport});
}
addTask(){
  let taskN =  ReactDom.findDOMNode(document.getElementById("addtask"));
  let modifiedTasks= this.state.tasks;
  let modifiedTaskReport= this.state.taskReport;
  let ntaskId = this.state.tasks.length+this.state.tasks[0].taskId;
   modifiedTasks[this.state.tasks.length] = {taskId: ntaskId, name: taskN.value, isDone:false, priority:'low'}
  modifiedTaskReport.low++;
  this.setState({tasks:modifiedTasks});
  this.setState({taskReport:modifiedTaskReport});
  taskN.value = "";
}
addVTask(){
  let modifiedTasks= this.state.tasks;
  let modifiedTaskReport= this.state.taskReport;
  let ntaskId = this.state.tasks.length+this.state.tasks[0].taskId;
   modifiedTasks[this.state.tasks.length] = {taskId: ntaskId, name:"Double Click to add task", isDone:false, priority:'low'}
  modifiedTaskReport.low++;
  this.setState({tasks:modifiedTasks});
  this.setState({taskReport:modifiedTaskReport});
}

  render() {
    const taskReport = this.state.taskReport;
    const tasks = this.state.tasks;
    return (
      <React.Fragment>
      <Header title={this.state.title} />
      <div>
        <span className="badge">Urgent Tasks:{taskReport.high}</span>
        <span className="badge">Normal Priority Tasks:{taskReport.normal}</span>
        <span className="badge">Lazy Tasks:{taskReport.low}</span>
        <span className="badge">Completed Tasks:{taskReport.complete}/{tasks.length}</span>
        <button className="badgeBtn"
        onClick={()=>{this.markAll(true);}} 
        > Mark All Done</button>
        <button className="badgeBtn" 
        onClick={()=>{this.markAll(false);}} >
        Mark all Undone</button>
        <button className="badgeBtn" 
        onClick={()=>{this.addVTask();}} >
        Add Task</button>
       
      </div>
          {
          tasks.map(
              (task,ind)=>
              <TaskView task={task} key={ind}  isDoneChange={this.handleIsDoneChange.bind(this)}
              changePriority={this.handleChangePriority.bind(this)}
              updateTaskName = {this.updateTaskName.bind(this)} />
              
          )
          
      }
     <DummyCompo addTask = {this.addTask.bind(this)}/>
      </React.Fragment>
    );
  }
}

export default App;
