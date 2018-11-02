import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../service/inventory.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  //items:Item[];
  constructor(private inv:InventoryService) { }

  ngOnInit() {
   // this.items=this.inv.getAllItems();
  }

  deleteItem(id:number){
   // if(confirm("Are you sure you want to delete item#"+ id)){
      //this.inv.deleteItemById(id);
      //this.items = this.inv.getAllItems();
    }
    
  }

  

