import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FolderManagerComponent } from './folder-manager/folder-manager.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
 


@NgModule({
  declarations: [
    HomeComponent,
    FolderManagerComponent,
    
  ],
  exports:[
    HomeComponent,
    FolderManagerComponent,

  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
 
  ]
})
export class PagesModule { }
