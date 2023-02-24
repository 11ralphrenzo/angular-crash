import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../Models/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task? : Task; 
  @Output() onToggleTask : EventEmitter<Task> = new EventEmitter
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter
  faTimesIcon = faTimes;

  onToggle(arg0: Task|undefined) {
    this.onToggleTask.emit(this.task)
  }

  onDelete(task? : Task) {
    this.onDeleteTask.emit(task)
  }
}
