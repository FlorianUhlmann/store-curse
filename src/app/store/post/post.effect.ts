import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType} from '@ngrx/effects'
import { Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { Post } from "src/app/models/post";
import { PostService } from "src/app/services/post.service";
import * as FeatureActions  from './post.actions'

@Injectable()
export class PostEffects {

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(FeatureActions.loadPosts),
        switchMap(() => this.postHttpSerivce.getPost().pipe(
          map((data:Post[]) => FeatureActions.setPosts( {posts: data}) )
        )
        ))
        });


  constructor(private actions$: Actions,
              private postHttpSerivce: PostService ) {}
}
