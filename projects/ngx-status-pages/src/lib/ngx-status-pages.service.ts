import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StatusPagesConfig } from './ngx-status-pages.module';
import { MY_CONFIG_TOKEN } from './status-pages/token';

@Injectable({
  providedIn: 'root'
})
export class StatusPagesService {

  constructor(public router:Router,@Inject(MY_CONFIG_TOKEN) private config: StatusPagesConfig) { }
  /**
   * Display a particular status page without redirecting your user.
   * @param code 
   * The status code for the particular page you need.
   */
  public showStatusPage(code:number){
    this.router.navigateByUrl(`ngx-status-pages/${code}`,{skipLocationChange:true});
   }

}
