import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserComponent } from './components/user/user.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
