import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Inject, InjectionToken, ModuleWithProviders, NgModule, Type } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { NgxStatusHttpInterceptor } from './ngx-status-http-interceptor';
import { NgxStatusPagesRoutingModule } from './ngx-status-pages-routing-module';
import { NgxStatusPagesComponent } from './ngx-status-pages.component';
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
  declarations: [
    NgxStatusPagesComponent
  ],
  exports: [
    NgxStatusPagesComponent
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,useClass:NgxStatusHttpInterceptor,multi:true
    }
  ]
})

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
 public custom404?:Type<any> = NgxStatus404PageComponent
 public custom505?:Type<any> = NgxStatus500PageComponent
 public custom401?:Type<any> = NgxStatus401PageComponent
 public custom403?:Type<any> = NgxStatus403PageComponent
 public custom405?:Type<any> = NgxStatus405PageComponent
 public custom429?:Type<any> = NgxStatus429PageComponent
 public custom500?:Type<any> = NgxStatus500PageComponent
 public custom503?:Type<any> = NgxStatus503PageComponent
 public custom400?:Type<any> = NgxStatus400PageComponent
 public interceptHttp?:boolean = false
} 
