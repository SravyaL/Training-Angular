import React,{ Component } from 'react';
import './TaskNameHolder.css';


class TaskNameHolder extends Component{
    constructor(){
        super();
        this.state={
            isEdit:false
        }
    }
getTaskNameView(){
    if(this.state.isEdit)
        return <input type="text" value={this.props.taskName}/>
    else
        return <span className='col2' onDoubleClick={()=>this.setState({isEdit:true})}>{this.props.taskName}</span>
}
render(){
    const taskName = this.props.taskName;
    return(
       <span className='col2'>{taskName}</span>

    );
}
}

export default TaskNameHolder;