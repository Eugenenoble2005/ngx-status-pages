import { Component } from '@angular/core';

@Component({
  selector: 'lib-ngx-status-403',
  templateUrl:"./status-page.html",
  styleUrls: ['./status-page.css']
})
export class NgxStatus403PageComponent {
  public code = 403
  public header = "Forbidden"
  public message = "You do not have permission to access this resource. Contact the server administrator for more"
}
