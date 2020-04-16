import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtubeVideoPlayer',
  templateUrl: './youtubeVideoPlayer.component.html',
  styleUrls: ['./youtubeVideoPlayer.component.css']
})
export class YoutubeVideoPlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
