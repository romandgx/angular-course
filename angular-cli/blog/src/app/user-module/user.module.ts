import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersGeneratorComponent } from './components/users-generator/users-generator.component';
import { UserViewComponent } from './components/user-view/user-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UsersGeneratorComponent,
    UserViewComponent
  ],
  exports: [UsersGeneratorComponent]
})
export class UserModule { }
