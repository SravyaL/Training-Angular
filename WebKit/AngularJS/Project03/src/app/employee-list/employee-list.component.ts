import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { InventoryService } from '../service/inventory.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  emps:Employee[];
  constructor(private inv:InventoryService) { }

  ngOnInit() {
    this.emps=this.inv.getAllItems();
  }

  deleteItem(eid:number){
    if(confirm("Are you sure you want to delete Employee#"+ eid)){
      this.inv.deleteItemById(eid);
      this.emps = this.inv.getAllItems();
    }
    
  }

}
