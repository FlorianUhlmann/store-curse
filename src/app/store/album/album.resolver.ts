import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { finalize, first, tap } from 'rxjs/operators';
import { AppState } from '../app.store';
import * as albumActions from './album.action';
import { selectAll } from './album.reducer';
import { selectAllAlbums } from './album.selector';

@Injectable()
export class AlbumResolver implements Resolve<any> {

  loading = false;

  constructor( private store: Store<AppState>){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>  {

    return this.store
            .pipe(
              select(selectAllAlbums),
              /* select(this.store.pipe(select(selectAll))), */
              tap((courseLoaded) => {
                console.log("in resolver");
                if (!this.loading && !courseLoaded.length) {
                  console.log("in resolver in loop");
                  this.loading = true;
                  this.store.dispatch(albumActions.loadAllAlbums());
                }
              }),
              first(),
              finalize(() => this.loading = false)
            )
  }
}
