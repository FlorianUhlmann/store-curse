import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/post';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
export const setPosts = createAction('[Post] Loading Posts successfull', props<{ posts: Post[] }>());
export const addNewPost = createAction('[Post] Add New Post', props<{ post: Post }>());
export const deletePost = createAction('[Post] Delete Post', props<{ id: number }>());
export const clearPosts = createAction('[Post] Clear Posts');

export const loadPosts = createAction('[Post] Load Posts')
export const loadPostsError = createAction('[Post] Loading Posts Error');
export const setPostsError = createAction('[Posts] Error API get Posts')
