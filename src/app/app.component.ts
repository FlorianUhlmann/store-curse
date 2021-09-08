import { Component, OnInit } from '@angular/core';
import { PostManageService } from './services/post-manage.service';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { AppState } from './store/app.store';
import {  Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import * as postActinos from './store/post/post.actions'
import { selectAllPost } from './store/post/post.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public postList$: Observable<Post[]> = this.store.pipe(select(selectAllPost));

  constructor(
    private readonly postManageService: PostManageService,
    private readonly store: Store<AppState>,
    ) {}

  ngOnInit(){
    this.store.dispatch(postActinos.loadPosts());
  }

}
