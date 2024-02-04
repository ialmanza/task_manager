import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskService } from './services/task.service';





@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,

  ],
  providers: [TaskService],
})
export class AppModule {}
