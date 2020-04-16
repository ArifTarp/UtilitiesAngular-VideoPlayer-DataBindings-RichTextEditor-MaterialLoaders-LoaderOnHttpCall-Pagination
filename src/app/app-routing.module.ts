import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"iframeVideo",
    loadChildren: () => import('./iFrameVideoPlayer/iFrameVideoPlayer.module').then(m => m.IFrameVideoPlayerModule)
  },
  {
    path:"youtubeVideo",
    loadChildren: () => import('./youtubeVideoPlayer/youtubeVideoPlayer.module').then(m => m.YoutubeVideoPlayerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
