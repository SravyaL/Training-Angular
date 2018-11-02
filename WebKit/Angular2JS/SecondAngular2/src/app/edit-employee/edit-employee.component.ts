import { Component } from '@angular/core';
import { EmployeeService } from 'app/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent  {

  empService : EmployeeService;
  dojString : string;
  possibleDesignations : string[];

  constructor( empService : EmployeeService) {
    this.empService = empService; 

    this.possibleDesignations=['ProjectManager','ProgramAnalyst','NetworkAdmin'];
    this.dojString = this.empService.employee.doj.toISOString().substring(0,10);
  }

  updateDoj(){
    let today = new Date();
    this.empService.employee.doj=new Date(this.dojString);
    this.empService.employee.experience=today.getFullYear() - this.empService.employee.doj.getFullYear();
  }
}
