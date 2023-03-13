import { Component } from '@angular/core';

@Component({
  selector: 'lib-ngx-status-401',
  templateUrl:"./status-page.html",
  styleUrls: ['./status-page.css']
})
export class NgxStatus401PageComponent {
  public code = 401
  public header = "Unauthorized"
  public message = "You are unauthenticated and cannot view this page. Contact the server administrator for more information"
}
