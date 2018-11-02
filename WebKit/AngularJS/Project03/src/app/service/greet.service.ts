import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetService {

  constructor() { }
  getTimelyGreet():string{
    let greeting:string= " ";
    let currentHour=(new Date()).getHours();
    if(currentHour>=3 &&currentHour<=11){
      greeting="Good Morning";}
    else if (currentHour<=14){
      greeting="Good Afternoon";}
    else{
      greeting="Good Evening";
    }
     return greeting;
  }
}
