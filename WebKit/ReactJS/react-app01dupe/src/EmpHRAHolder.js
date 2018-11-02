import React ,{Component} from 'react';

import ReactDom from  'react-dom';

class EmpHRAHolder extends Component
 {
     constructor(){
         super();
         this.state = {
             isEdit:false,
             empHRA:null
         };
         this.getEmpHRAView=this.getEmpHRAView.bind(this);
         this.updateEmpHRA =  this.updateEmpHRA.bind(this);
     }
     updateEmpHRA()
     {
        this.props.updateEmpHRA(this.state.empHRA)
     }
     getEmpHRAView(){
         if(this.state.empHRA==null)
            this.setState({empHRA:this.props.empHRA})
         if(this.state.isEdit)
         return (
         <span className="col2">
            <input type= "number" id="txtTNM" size="40" value={this.state.empHRA} 
            onChange = {(e)=> this.setState({empHRA:e.target.value})}
            />
            <button type="button" 
            onClick = {()=>{this.setState({isEdit:false});this.updateEmpHRA();} }
            >&#10004;</button>
            <button type="button" onClick = {()=>this.setState({isEdit:false})}>&#10006;</button>
         </span>
         );
         else
         return (<span className = "col2" onDoubleClick = {()=>this.setState({isEdit:true})}>
         {this.props.empHRA}</span>
         );
     }
     render(){
         const empHRA = this.props.empHRA; 
         return (
            this.getEmpHRAView() 
         );
     }
 }
 export default EmpHRAHolder;