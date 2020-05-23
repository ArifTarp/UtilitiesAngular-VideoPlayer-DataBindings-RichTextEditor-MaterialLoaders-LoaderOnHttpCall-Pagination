import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'AngularVideoPlayer';
  isMainPage:boolean = true;
  constructor(private router: Router, public httpClient: HttpClient) {
    /* *************** Url Change Detector *************** */
    router.events.subscribe((val) => {
        if(val instanceof NavigationEnd) {
          var url = window.location.href
          if(url === "http://localhost:4200/" || url === "http://localhost:4200"){
            this.isMainPage = true;
          }
          else{
            this.isMainPage = false;
          }
        }
    });
  }

  makeHttpCall() {
    for (let index = 0; index < 20; index++) {
      this.httpClient.get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((r) => {
        console.log(r);
      });
    }
  }
}
