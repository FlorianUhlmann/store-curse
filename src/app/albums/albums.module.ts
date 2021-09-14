import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumCardComponent } from './album-card/album-card/album-card.component';
import { MaterialModule } from '../material-module';



@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    AlbumsComponent
  ]
})
export class AlbumsModule { }
