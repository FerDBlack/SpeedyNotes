import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './note/note.component';
import { GridNotesComponent } from './grid-notes/grid-notes.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NoteComponent,
    GridNotesComponent
  ],
  exports: [
    NoteComponent,
    GridNotesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ]
})
export class ComponentsModule { }
