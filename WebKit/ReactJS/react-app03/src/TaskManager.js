import React, { Component } from 'react';
import PriorityBox from './PriorityBox';


class TaskManager extends Component{
    render(){
        const task = this.props.task;
        return(
            <div>
            <label>Enter task: </label>
            <input type='text' id="task"/>
            <button type="button" onClick={this.props.addTasks(task)}>Add Task</button>
            </div>
        );
    }
}

export default TaskManager;