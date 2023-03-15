# ngx-status-pages  


> Easily create http error pages for angular applications.


##  Get Started

###  Installation

You can install this package locally with npm.

```bash
# To get the latest stable version and update package.json file:
npm i ngx-status-pages
```

### <a name="usage"></a> Usage

`StatusPagesModule` should be imported into your root module like so:

```typescript
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
