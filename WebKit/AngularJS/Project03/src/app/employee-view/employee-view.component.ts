import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee';
import { InventoryService } from '../service/inventory.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  emp : Employee;
  constructor(private activatedRoute : ActivatedRoute, 
              private invService : InventoryService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      data => {
       let itemId = data['id'];
       console.log(itemId);
       this.emp = this.invService.getItemById(itemId);
       
        
      }
    );
  }
}
