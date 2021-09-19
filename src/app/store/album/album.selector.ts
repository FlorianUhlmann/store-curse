import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAlbum from "./album.reducer"

export const selectAlbumState = createFeatureSelector<fromAlbum.State>(
  fromAlbum.albumFeatureKey
)

export const selectAllAlbums = createSelector(selectAlbumState, fromAlbum.selectAll)

