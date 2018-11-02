import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

  showAboutUs(){
    this.router.navigateByUrl('/abt');

  }
  showContactUs(){
    this.router.navigateByUrl("/cont");
  }
}
