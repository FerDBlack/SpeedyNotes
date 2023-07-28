import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';



@NgModule({
  declarations: [

    NoteComponent
  ],
  exports: [
    NoteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
