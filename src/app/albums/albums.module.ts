import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { AlbumCardComponent } from './album-card/album-card/album-card.component';
import { MaterialModule } from '../material-module';
import { AlbumsTableHttpComponent } from './albums-table-http/albums-table-http/albums-table-http.component';
import { EditAlbumDialogComponent } from './edit-album-dialog/edit-album-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsRoutingModule } from './albums-routing.module';

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumCardComponent,
    AlbumsTableHttpComponent,
    EditAlbumDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AlbumsRoutingModule
  ],
  exports: [
    AlbumsComponent
  ]
})
export class AlbumsModule { }
