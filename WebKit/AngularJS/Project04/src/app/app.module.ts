import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { VisitorComponent } from './visitor/visitor.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemViewComponent } from './item-view/item-view.component';

const RoutesMap:Routes=[
  {path:'',component:HomeComponent},
  {path:'vc',component:VisitorComponent},
  {path:'ilc',component:ItemsListComponent},
  {path:'if',component:ItemFormComponent},
  {path:'ivc/:id',component:ItemViewComponent},
  {path:'ie/:id',component:ItemFormComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitorComponent,
    ItemsListComponent,
    ItemFormComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RoutesMap),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
