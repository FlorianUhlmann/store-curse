import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/post';
import { AppState } from './store/app.store';
import { select, Store } from '@ngrx/store';
import * as postActions from './store/post/post.actions'
import { selectAllPost } from './store/post/post.selectors';
import { Router } from '@angular/router';
import { PostManageService } from './services/post-manage.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public navLinks: any[] = [
    {
        label: 'Post API',
        link: './posts',
    }, {
      label: 'Albums API',
      link: './albums',
    }, {
      label: 'Third',
      link: './charts',
  },
];
  background = '';

  constructor(private readonly store: Store<AppState>,private router: Router, private readonly postManagerServices: PostManageService) {
  }

  ngOnInit(){}


  toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }


}
