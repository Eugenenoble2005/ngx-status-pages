import { Component } from '@angular/core';

@Component({
  selector: 'lib-ngx-status-429',
  templateUrl:"./status-page.html",
  styleUrls: ['./status-page.css']
})
export class NgxStatus429PageComponent {
  public code = 429
  public header = "Too Many Requests"
  public message = "You've sent to many requests. Please try again later"
}
