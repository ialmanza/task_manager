import { Injectable } from '@angular/core';
import { Task } from '../models/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
    tasks: Task[] = [];

    constructor() {
      this.tasks = [
      //   {title: 'Task 1', description: 'Description 1', hide: true},
      //   {title: 'Task 2', description: 'Description 2', hide: true}
       ]
    }

    getTasks(){
      if(localStorage.getItem('tasks') === null){
        this.tasks = JSON.parse(localStorage.getItem('tasks')??'');
        return this.tasks;

      } else {
       this.tasks = JSON.parse(localStorage.getItem('tasks')??'');
        return this.tasks;
      }


    }

    addTask(task: Task){
      this.tasks.push(task);
      let tasks: Task[] = [];
      if(localStorage.getItem('tasks') === null){
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

      }
      else{
        tasks = JSON.parse(localStorage.getItem('tasks')??'[]');
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }

    }


    deleteTask(task: Task){
      for(let i = 0; i < this.tasks.length; i++){
        if(this.tasks[i] === task){
          this.tasks.splice(i, 1);
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
      }
    }

  }
