import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Models/Task';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  @Output() onSubmitTask : EventEmitter<Task> = new EventEmitter() 
  text : string = ""
  day : string = ""
  reminder : boolean = false
  showAddTask! : boolean
  subscription : Subscription

  constructor(private uiService : UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text){
      alert('Please add a Name.')
      return
    }

    if(!this.day){
      alert('Please add a Day.')
      return
    }

    const newTask : Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.text = ""
    this.day = ""
    this.reminder = false

    this.onSubmitTask.emit(newTask)
  }
}
