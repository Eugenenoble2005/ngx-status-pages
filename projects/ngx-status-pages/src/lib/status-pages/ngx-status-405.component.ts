import { Component } from '@angular/core';

@Component({
  selector: 'lib-ngx-status-405',
  templateUrl:"./status-page.html",
  styleUrls: ['./status-page.css']
})
export class NgxStatus405PageComponent {
  public code = 405
  public header = "Method Not Allowed"
  public message = "Contact the server administrator for more information"
}
