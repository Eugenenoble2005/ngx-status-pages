import { Inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { MY_CONFIG_TOKEN } from './status-pages/token';
import { StatusPagesConfig } from './ngx-status-pages.module';
import { StatusPagesService } from './ngx-status-pages.service';

@Injectable()
export class NgxStatusHttpInterceptor implements HttpInterceptor {
  constructor(@Inject(MY_CONFIG_TOKEN) private config:StatusPagesConfig,public statusPages:StatusPagesService){

  }
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      //handle http errors with appropriate status page
      if(this.config.interceptHttp){
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
      else{
        return next.handle(httpRequest);
      }
  }
}
