import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { AlbumsComponent } from './albums/albums.component';


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component:  PostComponent},
  { path: 'albums', component: AlbumsComponent},
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
