import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Album } from '../models/album';
import { AppState } from '../store/app.store';
import { first, switchMap, tap } from 'rxjs/operators';
import { AlbumService } from '../albums/album.service';
import { selectAlbumState, selectAllAlbums } from '../store/album/album.selector';
import { setAlbums } from '../store/album/album.action';


@Injectable({
  providedIn: 'root',
})
export class AlbumManageService {
  album$: Observable<Album[]> = this.store.pipe(select(selectAllAlbums));
  constructor(
    private readonly albumService: AlbumService,
    private readonly store: Store<AppState>
  ) {}

  getAlbums(): Observable<Album[]> {
    return this.album$.pipe(
      first(),
      switchMap((album: Album[]) => {
        if (album.length) {
          return of(album);
        }
        return this.albumService.getAlbums()
      }),
      tap((albums: Album[]) => {
        this.store.dispatch(setAlbums({ albums }));
      }),
    );
  }


}
