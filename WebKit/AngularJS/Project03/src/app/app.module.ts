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
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const RoutesMap:Routes=[
 // {path:'',component:HomeComponent},
  //{path:'vc',component:VisitorComponent},
  {path:'ilc',component:EmployeeListComponent},
  {path:'if',component:EmployeeFormComponent},
  {path:'ivc/:id',component:EmployeeViewComponent},
  {path:'ie/:id',component:EmployeeFormComponent}
 //{path:'tmc',component:TaskManagerComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisitorComponent,
    ItemsListComponent,
    ItemFormComponent,
    ItemViewComponent,
    TaskViewComponent,
    TaskManagerComponent,
    NewTaskComponent,
    EmployeeViewComponent,
 
    EmployeeFormComponent,
    EmployeeListComponent
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
