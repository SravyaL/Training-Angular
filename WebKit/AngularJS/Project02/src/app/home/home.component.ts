import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string;
  greeting: string;
  constructor(private greetService : GreetService) { }

  ngOnInit() {
    this.userName = "Somebody";
    this.greeting = this.greetService.getTimelyGreeting();
  }

}
