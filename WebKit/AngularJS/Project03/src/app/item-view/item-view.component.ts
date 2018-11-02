import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../service/inventory.service';

import { Employee } from '../model/employee';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  emp : Employee;
  constructor(private activatedRoute : ActivatedRoute, 
              private invService : InventoryService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      data => {
       let itemId = data['eid'];
       this.emp = this.invService.getItemById(itemId);
        
      }
    );
  }

}
