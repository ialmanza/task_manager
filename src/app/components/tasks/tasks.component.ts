import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/Task';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() tasks: Task[] = [];

  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    if(confirm('Are you sure?')){

      this.taskService.deleteTask(task.id);

      this.taskService.deleteTask(task.title);
    }
  }



}
