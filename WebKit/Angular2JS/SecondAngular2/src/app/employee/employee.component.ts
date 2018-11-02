import { Component } from '@angular/core';
import { Employee } from 'app/employee';
import { GreetService } from 'app/greet.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employee : Employee;
  dojString : string;
  possibleDesignations : string[];
  greeting : string;
  constructor( greetService : GreetService) { 
    this.employee = new Employee();

    this.employee.empId=0;
    this.employee.eName='';
    this.employee.isMarried=false;
    this.employee.spouse='';
    this.employee.doj=new Date();
    this.employee.experience=0;
    this.employee.designaton='';

    this.possibleDesignations=['ProjectManager','ProgramAnalyst','NetworkAdmin'];
    this.dojString = this.employee.doj.toISOString().substring(0,10);

    console.log("From Emp Component: "+greetService.getGreeting());
    this.greeting=greetService.getGreeting();
  }

  updateDoj(){
    let today = new Date();
    this.employee.doj=new Date(this.dojString);
    this.employee.experience=today.getFullYear() - this.employee.doj.getFullYear();
  }
}
