import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersGeneratorComponent } from './components/users-generator/users-generator.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { ConfirmGetDataDirective } from './directives/confirm-get-data.directive';
import { ChangeImageDirective } from './directives/change-image.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    UsersGeneratorComponent,
    UserViewComponent,
    DateFormatPipe,
    ConfirmGetDataDirective,
    ChangeImageDirective,
  ],
  exports: [UsersGeneratorComponent]
})
export class UserModule { }
