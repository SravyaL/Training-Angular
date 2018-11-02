import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { InventoryService } from '../service/inventory.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
 /* item:Item;
  isEdit:boolean;*/
  constructor(private inv:InventoryService,private router:Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
 /*   this.activatedRoute.params.subscribe(
      (data)=>{
        let itemId = data['id'];
        if(itemId){
          this.item = this.inv.getItemById(itemId);
          this.isEdit = true;
        }else{
          this.item = new Item();
          this.isEdit = false;
        }
      }
    );
  }
  save(){
    if(this.isEdit)
      this.inv.update(this.item);
    else
      this.inv.add(this.item);
    this.router.navigateByUrl("/ilc");
  }
cancel()
{
  this.router.navigateByUrl("/ilc");*/
}
}
