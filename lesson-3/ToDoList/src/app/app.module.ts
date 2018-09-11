import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TasksModule } from './tasks-module/tasks.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { TodosService } from './tasks-module/services/todos.service';

export const loadTasks = (todosService: TodosService) => {
  return () => todosService.initService();
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
    TodosService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadTasks,
      deps: [TodosService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
