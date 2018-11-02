import React, { Component } from 'react';
import PriorityBox from './PriorityBox.js';
import TaskNameHolder from './TaskNameHolder.js'
import './TaskView.css';
class TaskView extends Component{
    render(){
        const task = this.props.task;
        return(

            <div className="taskView"> 
             
            <span className="col1">{task.taskId}</span> 
            <TaskNameHolder taskName ={task.name}
             updateTaskName = {(tnm)=>this.props.updateTaskName(tnm,task.taskId)}/>   
           
            {task.isDone ?
            (<span className="col2a" >&#10004; </span>):
            (<span className="col2a" >... </span>)
        }
           <PriorityBox value = {task.priority} changePriority={()=>this.props.changePriority(task.taskId)}/>

            <button className="doneBtn" onClick={() => {this.props.isDoneChange(task.taskId, !task.isDone);}}
            >
            {task.isDone?'ReDo':'Done'}</button>
            </div>
        );
    }

}

export default TaskView;
