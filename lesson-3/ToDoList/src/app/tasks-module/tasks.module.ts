import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksBlockComponent } from './components/tasks-block/tasks-block.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderItemComponent } from './components/slider-item/slider-item.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,

  ],
  declarations: [
    TasksBlockComponent,
    TaskEditComponent,
    SliderComponent,
    SliderItemComponent
  ],
  exports: [TasksBlockComponent],
})
export class TasksModule { }
