import { Injectable } from '@angular/core';

import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  emps:Employee[];

  constructor() { 
    this.emps=[
      {eid:101, ename:'Sravya',basic:42000, hra:0.8,edept:"IT"},
      {eid:102, ename:'Mayu',basic:43000, hra:0.5,edept:"Management"}
    ];
  }
  getAllItems()
  {
    return this.emps;
  }
  add(emp:Employee){
    
    this.emps.push(emp);
  }

  getItemById(id:number):Employee{
    let emp : Employee = null;
    emp = this.emps.find(
      (i) => (i.eid == id)
    );
    return emp;
  }

  deleteItemById(idInputed:number){
    let indexToDel = this.emps.findIndex(
      (i) => (i.eid == idInputed)
    );

    this.emps.splice(indexToDel,1);
  }

  update(emp:Employee){
    let indexToUpd = this.emps.findIndex(
      (i) => (i.eid == emp.eid)
    );
    this.emps[indexToUpd] =emp;
   
  }

  
}
