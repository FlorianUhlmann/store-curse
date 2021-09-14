import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/store/app.store';
import { select, Store } from '@ngrx/store';
import * as postActions from '../store/post/post.actions'
import * as postSelection from '../store/post/post.selectors'
import { PostManageService } from '../services/post-manage.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  public postList$: Observable<Post[]> = this.postManagerService.posts$;

  constructor(private readonly postManagerService: PostManageService, private readonly store: Store<AppState>) { }

  ngOnInit(): void {
        this.postManagerService.getPost().subscribe();
  }

  addPost() {
    const post = {
      userId: 3,
      id: Math.floor(Math.random() * 200),
      title: 'Random title',
      body: 'Random Body'
    }
    this.store.dispatch(postActions.addNewPost({post}));
  }

  deleteAllPost(){
    const postsIds = this.postList$.pipe(
      tap(post => console.log(post)),
      map((posts:Post[]) => posts.forEach(post => post.id))
    )

    this.store.dispatch(postActions.clearPosts())

    console.log(postsIds)
  }
}
