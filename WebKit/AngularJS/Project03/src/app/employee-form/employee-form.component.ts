import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { InventoryService } from '../service/inventory.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  emp:Employee;
  isEdit:boolean;
  constructor(private inv:InventoryService,private router:Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data)=>{
        let itemId = data['id'];
        if(itemId){
          this.emp = this.inv.getItemById(itemId);
          this.isEdit = true;
        }else{
          this.emp = new Employee();
          this.isEdit = false;
        }
      }
    );
  }
  save(){
    if(this.isEdit)
      this.inv.update(this.emp);
    else
      this.inv.add(this.emp);
    this.router.navigateByUrl("/ilc");
  }
cancel()
{
  this.router.navigateByUrl("/ilc");
}

}
