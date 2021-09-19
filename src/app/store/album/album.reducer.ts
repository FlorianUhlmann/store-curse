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
  )
)

export const { selectAll, selectEntities, selectIds, selectTotal } =
  albumAdapter.getSelectors();
