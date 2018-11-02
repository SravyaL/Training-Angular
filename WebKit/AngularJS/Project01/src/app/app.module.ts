import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ToWordsPipe } from './to-words.pipe';

const routeMap: Routes = [
  {path:'', component:HomeComponent},
  {path:'abt', component:AboutUsComponent},
  {path:'cont', component:ContactUSComponent},
  {path:'pipes', component:PipesDemoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUSComponent,
    PipesDemoComponent,
    ToWordsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeMap)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
