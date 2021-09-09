import { Component, OnInit } from '@angular/core';
import { PostManageService } from './services/post-manage.service';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { AppState } from './store/app.store';
import {  Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import * as postActinos from './store/post/post.actions'
import { selectAllPost } from './store/post/post.selectors';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public postList$: Observable<Post[]> = this.store.pipe(select(selectAllPost));
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private readonly store: Store<AppState>,private router: Router) {
    this.navLinks = [
      {
          label: 'Post API',
          link: './posts',
          index: 0
      }, {
        label: 'Albums API',
        link: './albums',
        index: 1
      }, {
        label: 'Third',
        link: './posts',
        index: 2
    },
  ];
  }

  ngOnInit(){
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
    this.store.dispatch(postActinos.loadPosts());
  }

  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';

  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }
}
