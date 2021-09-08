import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/post';

export const loadPosts = createAction('[Post] Load Posts')
export const setPosts = createAction('[Post] Loading Posts successfull', props<{ posts: Post[] }>());
export const loadPostsError = createAction('[Post] Loading Posts Error');

export const setPostsError = createAction(
  '[Posts] Error API get Posts'
)
