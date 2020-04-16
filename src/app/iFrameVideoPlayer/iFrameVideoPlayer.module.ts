import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IFrameVideoPlayerComponent } from './iFrameVideoPlayer.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IFrameVideoPlayerComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IFrameVideoPlayerComponent]
})
export class IFrameVideoPlayerModule { }
