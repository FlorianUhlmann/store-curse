import { state } from "@angular/animations";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Album } from "src/app/models/album";
import * as AlbumActions from "./album.action"

export interface State extends EntityState<Album>{
}

export const albumFeatureKey = 'album';

const albumAdapter = createEntityAdapter<Album>({
});

export const albumInitialState: State = albumAdapter.getInitialState(
);

export const albumReducer = createReducer(
  albumInitialState,
  on(AlbumActions.setAlbums, (state, { albums} ) => albumAdapter.setAll(
    albums, state)
  ),
  on(AlbumActions.updateAlbum, (state, {update}) => albumAdapter.updateOne(
    update, state)
  ),
  on(AlbumActions.deleteAlbum, (state, { id }) => albumAdapter.removeOne(
    id, state)
  )
)

export const { selectAll, selectEntities, selectIds, selectTotal } =
  albumAdapter.getSelectors();
