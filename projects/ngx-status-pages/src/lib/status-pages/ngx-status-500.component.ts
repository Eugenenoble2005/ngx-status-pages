import { Component } from '@angular/core';

@Component({
  selector: 'lib-ngx-status-500',
  templateUrl:"./status-page.html",
  styleUrls: ['./status-page.css']
})
export class NgxStatus500PageComponent {
  public code = 500
  public header = "Internal Server Error"
  public message = "Something went wrong with your request. Please contact the server administrators for more information"
}
