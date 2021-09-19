import { ActionReducerMap, State } from '@ngrx/store';
import * as fromPost from './post/post.reducer';
import * as fromAlbum from './album/album.reducer';

export interface AppState {
  [fromPost.postFeatureKey]: fromPost.State,
  [fromAlbum.albumFeatureKey]: fromAlbum.State
}

export const reducers: ActionReducerMap<AppState> = {
  [fromPost.postFeatureKey]: fromPost.reducer,
  [fromAlbum.albumFeatureKey]: fromAlbum.albumReducer
};
