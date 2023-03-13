import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusPagesModule } from 'projects/ngx-status-pages/src/public-api';
import { HomeComponent } from './home/home.component';
import { Custom404Component } from './custom404/custom404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StatusPagesModule.forRoot({custom404:Custom404Component,custom429:Custom404Component})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
