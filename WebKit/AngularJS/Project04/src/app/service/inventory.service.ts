import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  items:Item[];

  constructor() { 
    this.items=[
      {id:101, name:'TFIOS',price:450},
      {id:102, name:'TATWD',price:650}
    ];
  }
  getAllItems()
  {
    return this.items;
  }
  add(item:Item){
   
    this.items.push(item);
  }

  getItemById(id:number):Item{
    let item : Item = null;
    item = this.items.find(
      (i) => (i.id == id)
    );
    return item;
  }

  deleteItemById(idInputed:number){
    let indexToDel = this.items.findIndex(
      (i) => (i.id == idInputed)
    );

    this.items.splice(indexToDel,1);
  }

  update(item:Item){
    let indexToUpd = this.items.findIndex(
      (i) => (i.id == item.id)
    );
    this.items[indexToUpd] = item;
  
  }

  
}
