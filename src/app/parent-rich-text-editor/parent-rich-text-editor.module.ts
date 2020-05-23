import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ParentRichTextEditorComponent } from './parent-rich-text-editor.component';
import { FormsModule } from '@angular/forms';
import { ChildRichTextEditorComponent } from '../child-rich-text-editor/child-rich-text-editor.component';

const routes: Routes = [
  {
    path: '',
    component: ParentRichTextEditorComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [ParentRichTextEditorComponent, ChildRichTextEditorComponent]
})
export class ParentRichTextEditorModule { }
