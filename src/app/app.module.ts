import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusPagesModule } from 'projects/ngx-status-pages/src/public-api';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Custom404Component } from './custom404/custom404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    StatusPagesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
