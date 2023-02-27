import { AddTaskComponent } from './../components/add-task/add-task.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  @ViewChild(AddTaskComponent) taskInput: { newTaskForAdd: string };

  newTaskForAdd: string;

  todo:string[] = [];

  inProgress:string[] = [];

  testing:string[] = [];

  done:string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  constructor() {}

  getTask(event: string) {
    this.todo.push(event);
  }

  deleteTask(event: string) {
    if (this.todo.includes(event)) {
      this.todo.slice(this.todo.indexOf(event), 1);
    } else {
      if (this.inProgress.includes(event)) {
        this.inProgress.slice(this.inProgress.indexOf(event), 1);
      } else {
        if (this.testing.includes(event)) {
          this.testing.slice(this.testing.indexOf(event), 1);
        } else {
          if (this.done.includes(event)) {
            this.done.slice(this.done.indexOf(event), 1);
          }
        }
      }
    }
  }

  ngOnInit(): void {}
}
