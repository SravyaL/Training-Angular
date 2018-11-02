import { Injectable } from '@angular/core';
import { Employee } from 'app/employee';

@Injectable()
export class EmployeeService {
  employee : Employee;
  constructor() { 
    this.employee = new Employee();

    this.employee.empId=0;
    this.employee.eName='';
    this.employee.isMarried=false;
    this.employee.spouse='';
    this.employee.doj=new Date();
    this.employee.experience=0;
    this.employee.designaton='';
  }

  setEmployee(emp:Employee) : void {
    this.employee=emp;
  }
  getEmployee() : Employee {
    return this.employee;
  }
}
