import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as PostActions from './post.actions';
import { Post } from '../../models/post';
import { isNgTemplate } from '@angular/compiler';
import { state } from '@angular/animations';

export const postFeatureKey = 'post';

export interface State extends EntityState<Post> {}

const adapter = createEntityAdapter<Post>({
  selectId: (post) => post.id,
  sortComparer: (itmeA: Post, itemB: Post) => itmeA.title.localeCompare(itemB.title)
});

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(PostActions.setPosts, (state, { posts }) => adapter.setAll(posts, state)),
  on(PostActions.addNewPost, (state, { post }) => adapter.addOne(post, state)),
  on(PostActions.deletePost, (state, { id }) => adapter.removeOne(id, state)),
  on(PostActions.clearPosts, (state) => adapter.removeAll({ ...state, post: null }) )
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();
