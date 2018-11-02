import React, { Component } from 'react';
import Department from './Department.js';
import './EmployeeView.css';
import EmpNameHolder from './EmpNameHolder.js';
import EmpHRAHolder from './EmpHRAHolder.js';
import EmpBasicHolder from './EmpBasicHolder.js';
import EmpGenderHolder from './EmpGenderHolder.js';
class EmployeeView extends Component{
    render(){
        const emp = this.props.emp;
        return(
            <div className="empView">
                <span className="col1">{Number(emp.eid).toFixed(0)}</span>
                <EmpNameHolder empName ={emp.ename}
             updateEmpName = {(enm)=>this.props.updateEmpName(enm,emp.eid)}/>  
                <EmpGenderHolder empGender ={emp.gender}
             updateEmpGender = {(enm)=>this.props.updateEmpGender(enm,emp.eid)}/>  
                <EmpBasicHolder empBasic ={Number(emp.basic).toFixed(2)}
             updateEmpBasic = {(enm)=>this.props.updateEmpBasic(enm,emp.eid)}/> 
                {/* <span className="col2"><span>&#8377;</span>{Number(emp.basic).toFixed(2)}</span> */}
                {/* <span className="col2">{Number(emp.hra*100).toFixed(2)}%</span> */}
                <EmpHRAHolder empHRA ={Number(emp.hra*100).toFixed(2)}
             updateEmpHRA = {(enm)=>this.props.updateEmpHRA(enm,emp.eid)}/>
                <Department value={emp.edept} changeDept={()=>this.props.changeDept(emp.eid)}/>
                <button className="delbtn" onClick={() => { this.props.deleteEmp(emp.eid); }}>Delete</button>
               
            </div>
            
        );
    }
}

export default EmployeeView;