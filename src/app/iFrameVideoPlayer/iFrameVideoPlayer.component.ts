import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iFrameVideoPlayer',
  templateUrl: './iFrameVideoPlayer.component.html',
  styleUrls: ['./iFrameVideoPlayer.component.css']
})
export class IFrameVideoPlayerComponent implements OnInit {

  public unSafeUrl:string;
  public newVideoUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.unSafeUrl = "http://www.youtube.com/embed/qU87-1e5Ekw"

    // more information https://angular.io/guide/security#xss
    this.newVideoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.unSafeUrl);
  }

}
