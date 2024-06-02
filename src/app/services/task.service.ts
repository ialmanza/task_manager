import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
<<<<<<< HEAD
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
=======
    tasks: Task[] = [];
  platform: any;

    constructor( ) {
      this.tasks = this.getTasks();
  }



    getTasks(): Task[] {
      // Verifica si localStorage está disponible
      if (typeof localStorage !== 'undefined') {
         // Obtiene las tareas del localStorage
         const storedTasks = localStorage.getItem('tasks');

         // Si no hay tareas almacenadas, retorna un array vacío
         if (!storedTasks) {
             return [];
         }

         // Si hay tareas almacenadas, las parsea y las retorna
         return JSON.parse(storedTasks);
      } else {
         // Si localStorage no está disponible, retorna un array vacío
         return [];
      }
     }

     addTask(task: Task) {
      // Verifica si localStorage está disponible
      if (typeof localStorage !== 'undefined') {
         // Obtiene las tareas actuales del localStorage

         const storedTasks = this.getTasks();

         // Agrega la nueva tarea al array de tareas
         storedTasks.push(task);

         // Guarda el array actualizado en el localStorage
         localStorage.setItem('tasks', JSON.stringify(storedTasks));
      } else {
         // Si localStorage no está disponible, puedes manejarlo como prefieras
         console.error('localStorage no está disponible en este entorno.');
      }
     }



    deleteTask(title: string) {
      // Verifica si localStorage está disponible
      if (typeof localStorage !== 'undefined') {
         // Obtiene las tareas actuales del localStorage
         const storedTasks = this.getTasks();

         // Busca la tarea por su título y la elimina del array
         const taskIndex = storedTasks.findIndex(task => task.title === title);
         if (taskIndex !== -1) {
           storedTasks.splice(taskIndex, 1);

           // Guarda el array actualizado en el localStorage
           localStorage.setItem('tasks', JSON.stringify(storedTasks));
         } else {
           console.error('La tarea con el título proporcionado no se encontró.');
         }
      } else {
         // Si localStorage no está disponible, puedes manejarlo como prefieras
         console.error('localStorage no está disponible en este entorno.');
      }
     }

>>>>>>> 998e9d2078620bd6548cec5fbc29c9257893fe97

    private saveTasksToLocalStorage(tasks: Task[]) {
      try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Error saving tasks to localStorage', error);
      }
    }
  }

