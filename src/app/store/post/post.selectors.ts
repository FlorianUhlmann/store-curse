import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPost from './post.reducer';

export const selectPostState = createFeatureSelector<fromPost.State>(
  fromPost.postFeatureKey
);
export const selectEntities = createSelector(
  selectPostState,
  fromPost.selectEntities
);
export const selectAllPost = createSelector(
  selectPostState,
  fromPost.selectAll
);
export const selectPostById = (id: string) =>
  createSelector(selectEntities, (entities) => {
    return entities[id];
  });
