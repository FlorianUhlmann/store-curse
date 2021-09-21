import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './app/post/post.component';
import { AlbumsComponent } from './app/albums/albums.component';
import { AlbumResolver } from './app/store/album/album.resolver';
import { ChartsComponent } from './app/charts/charts/charts.component';


const routes: Routes = [
  { path: 'posts' , component:  PostComponent},
  { path: 'albums', component:  AlbumsComponent, resolve: {albums: AlbumResolver}},
  { path: 'charts', component:  ChartsComponent},
  { path: ''      , redirectTo: '/posts', pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
