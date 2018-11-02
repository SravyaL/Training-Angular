import React,{Component} from 'react';

class TaskRow extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.t.taskId}</td>
                <td>{this.props.t.name}</td>
                <td>{this.props.t.priority}</td>
                <td>{this.props.t.isDone?"Complete":"Incomplete"}</td>
                <td><button type="Submit" onClick={()=>{this.props.isCompleted(this.props.t.taskId);}}>Done</button></td>
            </tr>
        );
    }
}

export default TaskRow;