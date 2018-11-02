import React ,{Component} from 'react';
import  './TaskNameHolder.css';
import ReactDom from  'react-dom';

class TaskNameHolder extends Component
 {
     constructor(){
         super();
         this.state = {
             isEdit:false,
             taskName:''
         };
         this.getTaskNameView=this.getTaskNameView.bind(this);
         this.updateTaskName =  this.updateTaskName.bind(this);
     }
     updateTaskName()
     {
        this.props.updateTaskName(this.state.taskName)
     }
     getTaskNameView(){
         if(this.state.taskName.length==0)
            this.setState({taskName:this.props.taskName})
         if(this.state.isEdit)
         return (
         <span className="col2">
            <input type= "text" id="txtTNM" size="40" value={this.state.taskName} 
            onChange = {(e)=> this.setState({taskName:e.target.value})}
            />
            <button type="button" 
            onClick = {()=>{this.setState({isEdit:false});this.updateTaskName();} }
            >&#10004;</button>
            <button type="button" onClick = {()=>this.setState({isEdit:false})}>&#10006;</button>
         </span>
         );
         else
         return (<span className = "col2" onDoubleClick = {()=>this.setState({isEdit:true})}>
         {this.props.taskName}</span>
         );
     }
     render(){
         const taskName = this.props.taskName; 
         return (
            this.getTaskNameView() 
         );
     }
 }
 export default TaskNameHolder