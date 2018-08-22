import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './common-module/shared-components/posts/posts.component';
import { PostComponent } from './common-module/shared-components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
