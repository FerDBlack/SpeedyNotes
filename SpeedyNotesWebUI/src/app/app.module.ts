import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from "./components/components.module";
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    SharedModule,
    PagesModule,
    AppRoutingModule,
   
 
  
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
