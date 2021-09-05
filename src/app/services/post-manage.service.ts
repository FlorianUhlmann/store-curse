import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post';
import { PostService } from './post.service';
import { AppState } from '../store/app.store';
import { selectAllPost } from '../store/post/post.selectors';
import { first, switchMap, tap } from 'rxjs/operators';
import { setPosts } from '../store/post/post.actions';

@Injectable({
  providedIn: 'root',
})
export class PostManageService {
  posts$: Observable<Post[]> = this.store.pipe(select(selectAllPost));
  constructor(
    private readonly postService: PostService,
    private readonly store: Store<AppState>
  ) {}

  getPost(): Observable<Post[]> {
    return this.posts$.pipe(
      first(),
      switchMap((posts: Post[]) => {
        if (posts.length) {
          return of(posts);
        }
        return this.postService.getPost();
      }),
      tap((posts: Post[]) => {
        this.store.dispatch(setPosts({ posts }));
      })
    );
  }
}
