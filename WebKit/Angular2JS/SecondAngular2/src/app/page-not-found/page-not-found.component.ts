import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `{{errorMessage}}`
})
export class PageNotFoundComponent  {

  errorMessage : string;
  constructor() {
    this.errorMessage="Sorry! Requested resource not fund!";
   }

}
