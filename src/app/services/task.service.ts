import { Injectable } from '@angular/core';
import { Task } from '../models/Task';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
    tasks: Task[] = [];

    constructor() {
      this.tasks = [
       ]
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

    // deleteTask(task: Task){
    //   for(let i = 0; i < this.tasks.length; i++){
    //     if(this.tasks[i] === task){
    //       this.tasks.splice(i, 1);
    //       localStorage.setItem('tasks', JSON.stringify(this.tasks));
    //     }
    //   }
    // }

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


  }
