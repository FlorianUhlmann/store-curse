import { ActionReducerMap, State } from '@ngrx/store';
import * as fromPost from './post/post.reducer';
import * as fromAlbum from './album/album.reducer';

export interface AppState {
  [fromAlbum.albumFeatureKey]: fromAlbum.State
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAlbum.albumFeatureKey]: fromAlbum.albumReducer
};
