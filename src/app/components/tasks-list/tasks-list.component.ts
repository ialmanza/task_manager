import { Component, OnInit, OnDestroy } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';
import { CommonModule } from '@angular/common';
import { TasksComponent } from "../tasks/tasks.component";


@Component({
    selector: 'app-tasks-list',
    standalone: true,
    templateUrl: './tasks-list.component.html',
    styleUrl: './tasks-list.component.css',
    imports: [CommonModule, TasksComponent]
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(public taskService: TaskService) {}

  ngOnInit() {
<<<<<<< HEAD
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
=======
   this.tasks = this.taskService.getTasks();
>>>>>>> 998e9d2078620bd6548cec5fbc29c9257893fe97
  }

}
