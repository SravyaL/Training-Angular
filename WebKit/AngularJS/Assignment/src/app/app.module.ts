import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetComponent } from './service/greet/greet.component';
import { GreetPipe } from './serv/greet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    GreetPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
