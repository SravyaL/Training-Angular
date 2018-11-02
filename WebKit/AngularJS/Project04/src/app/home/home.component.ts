import { Component, OnInit } from '@angular/core';
import { GreetService } from '../service/greet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName:string;
  greeting:string;
  constructor(private greetService:GreetService) { }

  ngOnInit() {
    this.userName="Somebody";
    this.greeting=this.greetService.getTimelyGreet();
  }

}
