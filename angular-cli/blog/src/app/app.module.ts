import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { RenderableListComponent } from './common-module/shared-components/renderable-list/renderable-list.component';
import { UserModule } from './user-module/user.module';

@NgModule({
  declarations: [
    AppComponent,
    //RenderableListComponent,
  ],
  imports: [
    BrowserModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
