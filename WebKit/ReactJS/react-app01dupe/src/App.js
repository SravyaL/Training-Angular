import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import EmployeeView from './EmployeeView.js';
import ReactDom from  'react-dom';
import DummyCompo from './DummyCompo.js'

//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
       
       emps:[
         {eid:101,ename:'Sravya',gender:'Lady',basic: 12000, hra:0.8, edept:'HR'},
         {eid:102,ename:'Mayu',gender:'Lady',basic: 22000, hra:0.07, edept:'Accounts'},
         {eid:103,ename:'Manoj',gender:'Gent',basic: 42000, hra:0.097, edept:'Operations'},
         {eid:104,ename:'Adi',gender:'Lady',basic: 20050, hra:0.67, edept:'Sale'},
         {eid:105,ename:'Meher',gender:'Lady',basic: 82000, hra:0.07, edept:'Accounts'},
         {eid:106,ename:'Pratikesh',gender:'Gent',basic: 92000, hra:0.06, edept:'Sale'}

       ],
       empReport:{
        gents: 2,
        ladies:4,
        emps:6,
        
       },

       empDept:{
         Hr: 1,
         Acc: 2,
         Ops:1,
         Sale:2
       }

       
   };
  }
  updateEmpName(enm,eid)
   {
    let modifiedemps= this.state.emps;
    modifiedemps.find((e) => e.eid===eid).ename=enm;
    this.setState({emps:modifiedemps});
   }

   updateEmpBasic(basic, eid){
    let modifiedemps= this.state.emps;
    modifiedemps.find((e) => e.eid===eid).basic=basic;
    this.setState({emps:modifiedemps});
   }
   updateEmpHRA(hra, eid){
    let modifiedemps= this.state.emps;
    modifiedemps.find((e) => e.eid===eid).hra=hra;
    this.setState({emps:modifiedemps});
   }

   updateEmpGender(gender, eid){
    let modifiedemps= this.state.emps;
    let modifiedEmpReport= this.state.empReport;
    let ind = modifiedemps.findIndex((e)=>e.eid===eid);  
    if(gender === 'Lady' && (gender != modifiedemps[ind].gender) )   {
      modifiedEmpReport.ladies++;  
      modifiedEmpReport.gents--; 
    }
        
    if(gender === 'Gent' && (gender != modifiedemps[ind].gender))  {
    modifiedEmpReport.gents++;
    modifiedEmpReport.ladies--;
   }
    modifiedemps[ind].gender=gender;
    
    this.setState({emps:modifiedemps});
    this.setState({empReport:modifiedEmpReport});  
   }
   
  handleChangeDept(eid){
    let modifiedemps = this.state.emps;
    let modifiedempDept = this.state.empDept;
    let ind = modifiedemps.findIndex((e)=>e.eid===eid);
    
    if(modifiedemps[ind].edept==="Hr")
      modifiedemps[ind].edept='Accounts';
    else if(modifiedemps[ind].edept==='Accounts')
      modifiedemps[ind].edept='Operations';
      else if(modifiedemps[ind].edept==='Operations')
      modifiedemps[ind].edept='Sale';
    else
       modifiedemps[ind].edept='Hr';

    modifiedempDept.Hr=0;
    modifiedempDept.Acc=0;
    modifiedempDept.Ops=0;
    modifiedempDept.Sale=0;

    
    modifiedemps.forEach((e)=>{
      if(e.edept==='Hr') modifiedempDept.Hr++;
      else if(e.edept==='Accounts') modifiedempDept.Acc++;
      else if(e.edept==='Operations') modifiedempDept.Ops++;
      else modifiedempDept.Sale++;
    })
    this.setState({emps:modifiedemps});
    this.setState({empReport:modifiedempDept});

  }
deleteEmp(eid){
  let modifiedEmp= this.state.emps;    
  let modifiedEmpReport= this.state.empReport;  
  let modifiedempDept= this.state.empDept;      
  let index = modifiedEmp.findIndex((i)=>(i.eid === eid));    
  var dept = modifiedEmp[index].edept;    
  var gen = modifiedEmp[index].gender;    
  modifiedEmp.splice(index,1);      
  if(gen === 'Lady')    
  modifiedEmpReport.ladies--;    
  else    
  modifiedEmpReport.gents--;    
  if(dept==='Hr') modifiedempDept.Hr++;
      else if(dept==='Accounts') modifiedempDept.Acc++;
      else if(dept==='Operations') modifiedempDept.Ops++;
      else modifiedempDept.Sale++;   
  this.setState({emplyoee:modifiedEmp});    
  this.setState({empDept:modifiedempDept});
  this.setState({empReport:modifiedEmpReport});  

}
  addEmp(){
    let emp =  ReactDom.findDOMNode(document.getElementById("addEmp"));
    let modifiedemps= this.state.emps;
    let modifiedEmpReport = this.state.empReport;
    let modifiedempDept= this.state.empDept;
    let newid = this.state.emps.length+this.state.emps[0].eid;
     modifiedemps[this.state.emps.length] = {eid: newid, ename: emp.value, gender:'Lady', basic:150000, hra:0.08, edept:'Hr'}
    modifiedempDept.Hr++;
    modifiedEmpReport.ladies++;
    modifiedEmpReport.emps++;
    this.setState({emps:modifiedemps});
    this.setState({empDept:modifiedempDept});
    this.setState({empReport:modifiedEmpReport});
    emp.value = "";
  }
  render() {
    const empReport = this.state.empReport;
    const empDept = this.state.empDept;
    return( 
      <React.Fragment>
        <Header />
        <div>
        <span className="badge">Employees: {empReport.emps}</span>
        <span className="badge"> Male employees: {empReport.gents}</span>
        <span className="badge"> Female employees: {empReport.ladies}</span>
        <span className="badge"> Employees in HR: {empDept.Hr}</span>
        <span className="badge"> Employees in Accounts: {empDept.Acc}</span>
        <span className="badge"> Employees in Operations: {empDept.Ops}</span>
        <span className="badge"> Employees in Sale: {empDept.Sale}</span>
        </div>
        {
        this.state.emps.map(
          (emp,i)=>
          <EmployeeView emp = {emp} key = {i}
         
          changeDept = {this.handleChangeDept.bind(this)}
          updateEmpName ={this.updateEmpName.bind(this)}
          updateEmpBasic ={this.updateEmpBasic.bind(this)}
          updateEmpHRA ={this.updateEmpHRA.bind(this)}
          updateEmpGender ={this.updateEmpGender.bind(this)}
          deleteEmp = {this.deleteEmp.bind(this)}
          />
        )
      }
      <DummyCompo addEmp = {this.addEmp.bind(this)}/>
        <Footer />
      </React.Fragment> 
    );
  }
}

export default App;
