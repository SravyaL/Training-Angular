import React ,{Component} from 'react';

import ReactDom from  'react-dom';

class EmpNameHolder extends Component
 {
     constructor(){
         super();
         this.state = {
             isEdit:false,
             empName:''
         };
         this.getEmpNameView=this.getEmpNameView.bind(this);
         this.updateEmpName =  this.updateEmpName.bind(this);
     }
     updateEmpName()
     {
        this.props.updateEmpName(this.state.empName)
     }
     getEmpNameView(){
         if(this.state.empName.length==0)
            this.setState({empName:this.props.empName})
         if(this.state.isEdit)
         return (
         <span className="col2">
            <input type= "text" id="txtTNM" size="40" value={this.state.empName} 
            onChange = {(e)=> this.setState({empName:e.target.value})}
            />
            <button type="button" 
            onClick = {()=>{this.setState({isEdit:false});this.updateEmpName();} }
            >&#10004;</button>
            <button type="button" onClick = {()=>this.setState({isEdit:false})}>&#10006;</button>
         </span>
         );
         else
         return (<span className = "col2" onDoubleClick = {()=>this.setState({isEdit:true})}>
         {this.props.empName}</span>
         );
     }
     render(){
         const empName = this.props.empName; 
         return (
            this.getEmpNameView() 
         );
     }
 }
 export default EmpNameHolder