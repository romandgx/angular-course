import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TasksModule } from './tasks-module/tasks.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { TodoItemsService } from './tasks-module/services/todo-items.service';

export const loadTasks = (todoItemsService: TodoItemsService) => {
  return () => {
    todoItemsService.getTodos().subscribe(
      data => {
        for (let task of data.tasks) {
         localStorage.setItem(`task_${task.id}`, JSON.stringify(task));
        }
      }
    );
  };
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TasksModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [
    TodoItemsService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadTasks,
      deps: [TodoItemsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
