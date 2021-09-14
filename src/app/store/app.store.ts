import { ActionReducerMap, State } from '@ngrx/store';
import * as fromPost from './post/post.reducer';

export interface AppState {
  [fromPost.postFeatureKey]: fromPost.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromPost.postFeatureKey]: fromPost.reducer,
};
