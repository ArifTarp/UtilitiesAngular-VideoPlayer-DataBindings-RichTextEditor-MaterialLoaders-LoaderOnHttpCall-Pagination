import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoPlayerComponent } from './youtubeVideoPlayer.component';
import { Routes, RouterModule } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

const routes: Routes = [
  {
    path: '',
    component: YoutubeVideoPlayerComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YouTubePlayerModule
  ],
  declarations: [YoutubeVideoPlayerComponent]
})
export class YoutubeVideoPlayerModule { }
