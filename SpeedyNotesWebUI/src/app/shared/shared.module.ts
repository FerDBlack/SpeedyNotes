import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [
    NavComponent
  ],
  exports: [
    NavComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
   ]
})
export class SharedModule { }
