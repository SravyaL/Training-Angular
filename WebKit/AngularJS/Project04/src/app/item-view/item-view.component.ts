import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../service/inventory.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  item : Item;
  constructor(private activatedRoute : ActivatedRoute, 
              private invService : InventoryService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      data => {
       let itemId = data['id'];
       this.item = this.invService.getItemById(itemId);
        
      }
    );
  }

}
