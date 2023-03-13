import { Component, Optional ,Inject} from '@angular/core';
import { StatusPagesConfig } from '../ngx-status-pages.module';
import { MY_CONFIG_TOKEN } from './token';

@Component({
  selector: 'lib-ngx-status-404',
  templateUrl:"./status-page.html",
  styleUrls: ['./status-page.css']
})

export class NgxStatus404PageComponent {
  public code = 404
  public header = "Page Not Found"
  public message = "Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable"
}
