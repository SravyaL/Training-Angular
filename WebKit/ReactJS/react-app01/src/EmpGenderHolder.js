import React ,{Component} from 'react';

import ReactDom from  'react-dom';

class EmpGenderHolder extends Component
 {
     constructor(){
         super();
         this.state = {
             isEdit:false,
             empGender:''
         };
         this.getEmpGenderView=this.getEmpGenderView.bind(this);
         this.updateEmpGender =  this.updateEmpGender.bind(this);
     }
     updateEmpGender()
     {
        this.props.updateEmpGender(this.state.empGender)
     }
     getEmpGenderView(){
         if(this.state.empGender=='')
            this.setState({empGender:this.props.empGender})
         if(this.state.isEdit)
         return (
         <span className="col2">
            <input type= "text" id="txtTNM" size="40" value={this.state.empGender} 
            onChange = {(e)=> this.setState({empGender:e.target.value})}
            />
            <button type="button" 
            onClick = {()=>{this.setState({isEdit:false});this.updateEmpGender();} }
            >&#10004;</button>
            <button type="button" onClick = {()=>this.setState({isEdit:false})}>&#10006;</button>
         </span>
         );
         else
         return (<span className = "col2" onDoubleClick = {()=>this.setState({isEdit:true})}>
         {this.props.empGender}</span>
         );
     }
     render(){
         const empGender = this.props.empGender; 
         return (
            this.getEmpGenderView() 
         );
     }
 }
 export default EmpGenderHolder;