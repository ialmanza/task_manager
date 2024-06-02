import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {

  }

  addTask(newtitle: HTMLInputElement, newdescription: HTMLTextAreaElement) {
    const id = Date.now().toString();
    this.taskService.addTask({
      id,
      title: newtitle.value,
      description: newdescription.value,
      hide: true
    })
    newtitle.value = '';
    newdescription.value = '';
    newtitle.focus();
    return false; // CANCELA EL COMPORTAMIENTO POR DEFECTO DEL EVENTO
  }
}
