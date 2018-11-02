import React ,{Component} from 'react';

import ReactDom from  'react-dom';

class EmpBasicHolder extends Component
 {
     constructor(){
         super();
         this.state = {
             isEdit:false,
             empBasic:null
         };
         this.getEmpBasicView=this.getEmpBasicView.bind(this);
         this.updateEmpBasic =  this.updateEmpBasic.bind(this);
     }
     updateEmpBasic()
     {
        this.props.updateEmpBasic(this.state.empBasic)
     }
     getEmpBasicView(){
         if(this.state.empBasic==null)
            this.setState({empBasic:this.props.empBasic})
         if(this.state.isEdit)
         return (
         <span className="col2">
            <input type= "number" id="txtTNM" size="40" value={this.state.empBasic} 
            onChange = {(e)=> this.setState({empBasic:e.target.value})}
            />
            <button type="button" 
            onClick = {()=>{this.setState({isEdit:false});this.updateEmpBasic();} }
            >&#10004;</button>
            <button type="button" onClick = {()=>this.setState({isEdit:false})}>&#10006;</button>
         </span>
         );
         else
         return (<span className = "col2" onDoubleClick = {()=>this.setState({isEdit:true})}>
         {this.props.empBasic}</span>
         );
     }
     render(){
         const empBasic = this.props.empBasic; 
         return (
            this.getEmpBasicView() 
         );
     }
 }
 export default EmpBasicHolder;