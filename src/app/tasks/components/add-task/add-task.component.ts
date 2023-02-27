import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() sendTaskEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  sendNewTask(task: string) {
    this.sendTaskEvent.emit(task);
  }
  
}
