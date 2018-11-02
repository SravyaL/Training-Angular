import React, { Component } from 'react';
import PriorityBox from './PriorityBox.js';
import './TaskView.css';
import TaskNameHolder from './TaskNameHolder.js';
class TaskView extends Component{
    render(){
        const task = this.props.task;
        return(
            <div className="taskView">
                <span className="col1">{task.taskId}</span>
                <TaskNameHolder value={task.name} />
                {task.isDone?
                    (<span className="col2a"> &#10004; </span>):
                    (<span className="col2a"> ... </span>)
                }
                <PriorityBox value={task.priority} changePriority={()=>this.props.changePriority(task.taskId)}/>
                
                <button
                    className="doneBtn"
                    onClick = {()=>{this.props.isDoneChange(task.taskId,!task.isDone);}}>
                    {task.isDone?'Redo':'Done'} </button>
            </div>
            
        );
    }
}

export default TaskView;