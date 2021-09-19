import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumCardComponent } from './album-card/album-card/album-card.component';
import { MaterialModule } from '../material-module';
import { AlbumsTableHttpComponent } from './albums-table-http/albums-table-http/albums-table-http.component';



@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumCardComponent,
    AlbumsTableHttpComponent
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
