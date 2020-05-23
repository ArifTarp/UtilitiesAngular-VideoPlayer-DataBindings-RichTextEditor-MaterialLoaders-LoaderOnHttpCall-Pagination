import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialLoadersComponent } from './angular-material-loaders/angular-material-loaders.component';
import { MyLoaderComponent } from './my-loader/my-loader.component';
import { PaginationComponent } from './pagination/pagination.component';
import { OneWayTwoWayBindingComponent } from './oneWay-twoWay-binding/oneWay-twoWay-binding.component';


const routes: Routes = [
  {
    path:"iframeVideo",
    loadChildren: () => import('./iFrameVideoPlayer/iFrameVideoPlayer.module').then(m => m.IFrameVideoPlayerModule)
  },
  {
    path:"youtubeVideo",
    loadChildren: () => import('./youtubeVideoPlayer/youtubeVideoPlayer.module').then(m => m.YoutubeVideoPlayerModule)
  },
  {
    path:"richTextEditor",
    loadChildren: () => import('./parent-rich-text-editor/parent-rich-text-editor.module').then(m => m.ParentRichTextEditorModule)
  },
  {
    path:"angularMaterialLoaders",
    component:AngularMaterialLoadersComponent
  },
  {
    path:"myLoader",
    component:MyLoaderComponent
  },
  {
    path:"pagination",
    component:PaginationComponent
  },
  {
    path:"oneWayTwoWayBindings",
    component:OneWayTwoWayBindingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
