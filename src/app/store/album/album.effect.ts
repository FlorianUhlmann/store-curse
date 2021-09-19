import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, concatMap, exhaustMap, map, reduce, switchMap, tap } from 'rxjs/operators';
import { AlbumService } from 'src/app/albums/album.service';
import { AppState } from '../app.store';
import * as actionsAlbum from './album.action'

@Injectable()
export class AlbumEffects {

  constructor(private actions$: Actions, private api: AlbumService, private store: Store<AppState> ) {}

  loadAlbums$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(actionsAlbum.loadAllAlbums),
        /** An EMPTY observable only emits completion. Replace with your own observable stream */
        concatMap(() => this.api.getAlbums()),
        map(albums =>  actionsAlbum.setAlbums({albums}))
    )}
  );

}
