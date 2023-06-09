import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MY_CONFIG_TOKEN } from 'projects/ngx-status-pages/src/lib/status-pages/token';
import { StatusPagesService } from 'projects/ngx-status-pages/src/public-api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public statusPage:StatusPagesService,@Inject(MY_CONFIG_TOKEN) private config:any,public http:HttpClient){
    http.get("https://httpstat.us/503").subscribe(rez=>{
      console.log(rez)
    })
  }
  show404(){
    var code = prompt("Enter status code");
    console.log(this.config)
    this.statusPage.showStatusPage(Number(code));
  }
}
