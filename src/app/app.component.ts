import { Component, OnInit } from '@angular/core';
import { PostManageService } from './services/post-manage.service';
import { Observable } from 'rxjs';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly postList$: Observable<Post[]> = this.postManageService.getPost();
  constructor(private readonly postManageService: PostManageService) {}

  ngOnInit() {}
}
