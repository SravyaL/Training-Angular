import React, {Component} from 'react';
import TaskRow from './TaskRow.js';


class TaskSection extends Component{
    render(){
        let tabStyle = {
            backgroundColor: '#91F0F0',
            //fontStyle: 'italic',
            width: '100%'
          };
        return(
            <table style={tabStyle}>
                <tr>
                    <th>Task#</th>
                    <th>Task Title</th>
                    <th>Status</th>
                </tr>
                {
                    this.props.tasks.map(
                        (task,ind) =>
                        <TaskRow key={ind} t={task} />
                    )
                }  
            
            </table>
        );
    }
}

export default TaskSection;