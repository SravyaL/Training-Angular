import { Component} from '@angular/core';
import { Employee } from 'app/employee';
import { EmployeeService } from 'app/employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent  {
 
  empService : EmployeeService;

  constructor( empService : EmployeeService) {
    this.empService = empService; 
  }

}
