import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { AppState } from 'src/app/store/app.store';
import { select, Store } from '@ngrx/store';
import * as postActions from '../store/post/post.actions'
import * as postSelection from '../store/post/post.selectors'
import { isLoweredSymbol } from '@angular/compiler';
import { MatGridList } from '@angular/material/grid-list';
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostCardComponent implements OnInit {

  @Input() data: Post| any = {};
  constructor(private readonly store: Store<AppState>) { }

  ngOnInit(): void {

  }

  deletePost(id: number){
    console.log(id)
    this.store.dispatch(postActions.deletePost({id}));
  }



}

