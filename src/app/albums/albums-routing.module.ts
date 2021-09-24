import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlbumResolver } from '../store/album/album.resolver';


const routes: Routes = [
  {
    path: '',
    component: AlbumsComponent,
    resolve: { albums: AlbumResolver }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ],
})
export class AlbumsRoutingModule { }
