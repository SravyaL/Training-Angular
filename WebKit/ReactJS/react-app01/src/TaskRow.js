import React,{Component} from 'react';

class TaskRow extends Component{
    render(){
        return(
            <tr>
                <td>{this.props.t.taskId}</td>
                <td>{this.props.t.name}</td>
                <td>{this.props.t.isComplete?"Complte":"InComplete"}</td>
            </tr>
        );
    }
}

export default TaskRow;
