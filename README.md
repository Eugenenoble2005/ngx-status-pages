<h1>Get started</h1>
<h3>Overview:</h3>

<p>Ngx-status-pages allows you to quickly create http error pages for angular projects for http errors like 404,401,500,e.t.c quickly and easily. All you need to do is install and import the module.

<h3>Installation</h>
<p>You may install the package locally through </p>

<code>
npm i ngx-status-pages
</code>

<h3>Usage</h>
<p><code>StatusPagesModule</code> Should be imported into your <b>root</b> angular module.

<code>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusPagesModule } from 'ngx-status-pages';

  
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StatusPagesModule.forRoot({interceptHttp:true}),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
</code>

