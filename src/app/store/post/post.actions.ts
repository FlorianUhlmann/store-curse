import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/post';

export const setPosts = createAction(
  '[Post] Set All The Post',
  props<{ posts: Post[] }>()
);
