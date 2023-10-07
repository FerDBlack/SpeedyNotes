import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FolderManagerComponent } from './pages/folder-manager/folder-manager.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:  HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'folder-manager',
    component: FolderManagerComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class AppRoutingModule { }
