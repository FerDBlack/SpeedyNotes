import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { FolderManagerComponent } from './folder-manager/folder-manager.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
 


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
    ComponentsModule,
    AngularMaterialModule,
 
  ]
})
export class PagesModule { }
