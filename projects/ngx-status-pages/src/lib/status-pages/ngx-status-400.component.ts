import { Component } from '@angular/core';

@Component({
  selector: 'lib-ngx-status-400',
  templateUrl:"./status-page.html",
  styleUrls: ['./status-page.css']
})
export class NgxStatus400PageComponent {
  public code = 400
  public header = "Bad Request"
  public message = "The server refused to process your request. Please try again later"
}
