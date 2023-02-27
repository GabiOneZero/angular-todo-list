import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { MaterialModule } from './../material/material.module';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
