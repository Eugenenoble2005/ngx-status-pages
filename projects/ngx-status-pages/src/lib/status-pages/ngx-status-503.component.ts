import { Component } from '@angular/core';

@Component({
  selector: 'lib-ngx-status-503',
  templateUrl:"./status-page.html",
  styleUrls: ['./status-page.css']
})
export class NgxStatus503PageComponent {
  public code = 503
  public header = "Service Unavailable"
  public message = "Your request cannot be processed right now. Please Try again later"
}
