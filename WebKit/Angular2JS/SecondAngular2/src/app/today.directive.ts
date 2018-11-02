import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appToday]'
})
export class TodayDirective implements AfterViewInit {
  @Input() appToday: string;
  constructor(private elRef: ElementRef) { 
  }
  ngAfterViewInit(): void {
    var d = new Date();
    if(this.appToday=="local-date")
      this.elRef.nativeElement.innerHTML += d.toLocaleDateString();
    else if(this.appToday=="local-time")
      this.elRef.nativeElement.innerHTML += d.toLocaleTimeString();
    else if(this.appToday=="iso")
      this.elRef.nativeElement.innerHTML += d.toISOString();
    else
      this.elRef.nativeElement.innerHTML += d.toString();
  }
}
