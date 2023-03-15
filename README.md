# ngx-status-pages  


> Easily create http error pages for angular applications.


##  Get Started

###  Installation

You can install this package locally with npm.

```bash
# To get the latest stable version and update package.json file:
npm i ngx-status-pages
```

###  Usage

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
After importing the `StatusPageModule` in your root module, a default 404 page should be created. You can test this by visiting a route that does not exist and a 404 page should greet you. If you want to use a custom component for your 404 page, you can configure it in the `forRoot` method:
```typescript
    StatusPagesModule.forRoot({interceptHttp:true,custom404:My404Component})
```
You can equally do this for other http status codes to configure custom pages.

### Manually show a status page
If you want to display a status page at anytime in your application, you can do this with the `StatusPagesService` service. In your component or service:

```typescript
import { StatusPagesService } from 'projects/ngx-status-pages';


 constructor(public statusPage:StatusPagesService){
    
 }

 showStatusPage()
 {
    //show 404
    this.statusPage.showStatusPage(404);

    //show 500
    this.statusPage.showStatusPage(500);

    //show 401
    this.statusPage.showStatusPage(401);
 }
```

### Http Interception
If you wish, you may configure the module to automatically intercept http requests and show the appropriate status page bases on the status code returned in an HttpRequest that failed:
```typescript
 StatusPagesModule.forRoot({interceptHttp:true})
 ```
 If you'd rather implement the HttpInterceptor yourself, you can set the `interceptHttp` attribute to false(or remove it from `forRoot` as it is false by default), and then create a HttpInterceptor like so:
 ```typescript
 export class MyHttpInterceptor implements HttpInterceptor {
  constructor(public statusPages:StatusPagesService){

  }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      //handle http errors with appropriate status page,if set in forRoot
        return next.handle(httpRequest).pipe(
          tap({
            next: (event)=>{
              
            },
            error:(error)=>{
              if(error.status != 200){
                  this.statusPages.showStatusPage(error.status)
              }
            }
          })
        )
  }
}
```
