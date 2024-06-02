import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
    //tasks: Task[] = [];
    private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([])

    constructor() {
      this.loadTasksFromLocalStorage();
    }

    getTasks(): Observable<Task[]>{
      return this.tasksSubject.asObservable();
    }

    addTask(task: Task){
      const storedTasks = this.getTasksFromLocalStorage();
      storedTasks.push(task);
      this.saveTasksToLocalStorage(storedTasks);
      this.tasksSubject.next(storedTasks);

    }


    deleteTask(id: string){
      let storedTasks = this.getTasksFromLocalStorage();
      storedTasks = storedTasks.filter((task: { id: string; }) => task.id !== id);
      this.saveTasksToLocalStorage(storedTasks);
      this.tasksSubject.next(storedTasks);

    }

    private loadTasksFromLocalStorage() {
      const storedTasks = this.getTasksFromLocalStorage();
      this.tasksSubject.next(storedTasks);
    }

    private getTasksFromLocalStorage(): Task[] {
      try {
        const storedCadenas = localStorage.getItem('tasks');
        if (!storedCadenas) {
          return [];
        }
        const parsedCadenas = JSON.parse(storedCadenas);
        if (!Array.isArray(parsedCadenas)) {
          console.warn('Tasks in localStorage is not an array');
          return [];
        }
        return parsedCadenas;
      } catch (error) {
        console.error('Error parsing tasks from localStorage', error);
        return [];
      }
    }

    private saveTasksToLocalStorage(tasks: Task[]) {
      try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Error saving tasks to localStorage', error);
      }
    }
  }

