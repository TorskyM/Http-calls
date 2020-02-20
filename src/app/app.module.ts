import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { PostsPageComponent } from './pages/posts-page/posts-page.component';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsPageComponent,
    PostDetailsPageComponent,
    
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
