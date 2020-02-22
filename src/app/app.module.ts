import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ToastrModule } from 'ngx-toastr';

import { RoutesModule } from './app.routes';
import { AppComponent } from './app.component';
import { appReducer } from './store/app.store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutesModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({}),
    ToastrModule.forRoot({
      preventDuplicates: true
    }
  ),
  BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
