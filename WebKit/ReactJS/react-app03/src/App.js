import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import DummyCompo from './DummyCompo.js'
import TaskManager from './TaskManager.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      userName:'Sravya',
      habits:['Reading','Writing','Jumping around'],
      tempH:'',
      skills:['Proj','Manage'],
      tasks:[{taskId:101, name:'Pay Course Fee', isDone:false,priority:'high'},
        {taskId:102, name:'Watch Netflix', isDone:false,priority:'low'},
        {taskId:103, name:'Make notes', isDone:false,priority:'normal'},
        {taskId:104, name:'Buy groceries', isDone:false,priority:'normal'},
        {taskId:105, name:'Finish reading', isDone:false,priority:'normal'},
        {taskId:106, name:'Submit Assignment', isDone:false,priority:'high'}]
    };
  }
  
   /*handleChangePriority(taskId, status){
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
 
   }*/
  addTasks(inputTask){
    let task = ReactDom.findDOMNode(document.getElementById('task'));
    let modifiedTasks = this.state.tasks;
    let id= 100 + (this.state.tasks.length+1);
    let newTask ={taskId:id, name: task.value, isDone: false, priority: 'low' };

    modifiedTasks.push(newTask);
   
    this.setState({tasks:modifiedTasks});
    task.value='';
  }
  addSkill(){
    let skill = ReactDom.findDOMNode(document.getElementById('txtSkill'));
    let modifiedSkills = this.state.skills.concat(skill.value);
    this.setState({skills:modifiedSkills});
    skill.value='';
  }
  updateUsername(event){
    this.setState({userName:event.target.value});

  }
  addHabit(){
    let modifiedHabits = this.state.habits.concat(this.state.tempH);
    this.setState({tempH:''});
    this.setState({habits:modifiedHabits});
  }

  render() {
    const userName = this.state.userName;
    const habits = this.state.habits;
    const tempH = this.state.tempH;
    const skills=this.state.skills;
    const tasks=this.state.tasks;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My React 03</h1>
        </header>
        <p className="App-intro">
         Welcome, {userName}
        </p>
        <div className="App-intro">
          <label>
            userName?
          </label>
          <input type='text'value={userName} onChange={this.updateUsername.bind(this)}/>
        </div>
        <div className="App-intro">
          <h4>Habits:</h4>
          <ol>
          {
            habits.map(
              (h,i)=><li key={i}>{h}</li>
            )
          }
          </ol>
          <label> New Habit </label>
          <input type="text" value={tempH} onChange={(e)=>{this.setState({tempH:e.target.value})}}/>
          <button type="button" onClick={this.addHabit.bind(this)}>Add</button>
        </div>
        <div className="App-intro">
          <h4>Skills:</h4>
         
          {
            skills.map(
              (s,i)=><li key={i}>{s}</li>
            )
          }
         
          <label> New Skill </label>
          <input type="text" id='txtSkill'/>
          <button type="button" onClick={this.addSkill.bind(this)}>Add</button>
        </div>
        <div className="App-intro">
          <h4>Tasks:</h4>
         
          {
            tasks.map(
              (s,i)=> key = {i}>{s}
            )
          }
         
         <TaskManager addTasks ={this.addTasks.bind(this)}/>
        </div>
        
       
        
        <DummyCompo message={"This is a message!"}/>
      </div>
    );
  }
}

export default App;
