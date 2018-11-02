import { Injectable } from '@angular/core';

@Injectable()
export class GreetService {

  constructor() { }

  getGreeting() : string{
    let greeting ="";
    let today = new Date();

    let currHour = today.getHours();

    if(currHour>=5 && currHour<12)
      greeting = "Good Morning";
    else if(currHour>=12 && currHour<15)
      greeting = "Good After Noon";  
    else if(currHour>=15 && currHour<22)
      greeting = "Good Evening"; 
    else
      greeting = "Good Night"; 

    return greeting;
  }
}
