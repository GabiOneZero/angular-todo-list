import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() item:string;

  @Output() deleteTaskEvent = new EventEmitter<string>();

  deleteTask(){
    this.deleteTaskEvent.emit(this.item);
  }

  constructor() { }

  ngOnInit(): void {
  }



}
