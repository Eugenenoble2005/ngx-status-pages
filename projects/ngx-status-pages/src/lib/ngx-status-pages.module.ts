import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Inject, InjectionToken, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { NgxStatusHttpInterceptor } from './ngx-status-http-interceptor';
import { NgxStatus400PageComponent } from './status-pages/ngx-status-400.component';
import { NgxStatus401PageComponent } from './status-pages/ngx-status-401.component';
import { NgxStatus403PageComponent } from './status-pages/ngx-status-403.component';
import { NgxStatus404PageComponent } from './status-pages/ngx-status-404.component';
import { NgxStatus405PageComponent } from './status-pages/ngx-status-405.component';
import { NgxStatus429PageComponent } from './status-pages/ngx-status-429.component';
import { NgxStatus500PageComponent } from './status-pages/ngx-status-500.component';
import { NgxStatus503PageComponent } from './status-pages/ngx-status-503.component';
import { MY_CONFIG_TOKEN } from './status-pages/token';

@NgModule({
  providers:[
    {
      provide:HTTP_INTERCEPTORS,useClass:NgxStatusHttpInterceptor,multi:true
    }
  ]
})
/**
 * MODULE TO CONFIGURE THE LIBRARY. IMPORT ONLY IN YOUR ROOT MODULE
 */
export class StatusPagesModule { 
  static forRoot(config: StatusPagesConfig): ModuleWithProviders<StatusPagesModule> {
    const defaultConfig = new StatusPagesConfig()
    const mergedConfig = Object.assign(defaultConfig,config)
    return {
      ngModule: StatusPagesModule,
      providers: [
        { provide: MY_CONFIG_TOKEN, useValue: mergedConfig }
      ]
    };
  }
  constructor(private router:Router,@Inject(MY_CONFIG_TOKEN) private config:StatusPagesConfig){
    const dynamicRoutes: Routes = [
      {path:"ngx-status-pages/404",component:config.custom404},
      {path:"ngx-status-pages/500",component:config.custom500},
      {path:"ngx-status-pages/503",component:config.custom503},
      {path:"ngx-status-pages/400",component:config.custom400},
      {path:"ngx-status-pages/401",component:config.custom401},
      {path:"ngx-status-pages/403",component:config.custom403},
      {path:"ngx-status-pages/405",component:config.custom405},
      {path:"ngx-status-pages/429",component:config.custom429},
      {path:"**",component:config.custom404}
    ];
    dynamicRoutes.forEach(route => {
      this.router.config.push(route);
    });
  }
}
export class StatusPagesConfig{
  /**
   * The component to use for your 404(Not Found) page. If you want to use a custom component
   */
 public custom404?:Type<any> = NgxStatus404PageComponent
   /**
   * The component to use for your 401(Unauthorized) page. If you want to use a custom component
   */
 public custom401?:Type<any> = NgxStatus401PageComponent
   /**
   * The component to use for your 403(Forbidden) page. If you want to use a custom component
   */
 public custom403?:Type<any> = NgxStatus403PageComponent
   /**
   * The component to use for your 405(Method Not Allowed) page. If you want to use a custom component
   */
 public custom405?:Type<any> = NgxStatus405PageComponent
   /**
   * The component to use for your 429(Too many requests) page. If you want to use a custom component
   */
 public custom429?:Type<any> = NgxStatus429PageComponent
   /**
   * The component to use for your 500(Internal Server Error) page. If you want to use a custom component
   */
 public custom500?:Type<any> = NgxStatus500PageComponent
  /**
   * The component to use for your 503(Service Unavailable) page. If you want to use a custom component
   */
 public custom503?:Type<any> = NgxStatus503PageComponent
  /**
   * The component to use for your 400(Bad Request) page. If you want to use a custom component
   */
 public custom400?:Type<any> = NgxStatus400PageComponent
  /**
   * Whether or not to intercept HTTP requests and display the appropriate status page according to the response code gotten from the HTTP client. Defaults to false
   */
 public interceptHttp?:boolean = false
} 
