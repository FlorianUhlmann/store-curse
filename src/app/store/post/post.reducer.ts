import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as PostActions from './post.actions';
import { Post } from '../../models/post';
import { isNgTemplate } from '@angular/compiler';

export const postFeatureKey = 'post';

export interface State extends EntityState<Post> {}

const adapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
  sortComparer: (itmeA: Post, itemB: Post) => itmeA.title.localeCompare(itemB.title)
});

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(PostActions.setPosts, (state, { posts }) => adapter.setAll(posts, state))
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();
