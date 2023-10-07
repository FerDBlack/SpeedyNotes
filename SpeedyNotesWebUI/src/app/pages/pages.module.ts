import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FolderManagerComponent } from './folder-manager/folder-manager.component';



@NgModule({
  declarations: [
    HomeComponent,
    FolderManagerComponent
  ],
  exports:[
    HomeComponent,
    FolderManagerComponent

  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
