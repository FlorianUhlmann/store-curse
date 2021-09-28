import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCardComponent } from './post-card.component';
import { MaterialModule } from '../material-module';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromPost from '../store/post/post.reducer';

const routes : Routes = [
  {
    path: '', component: PostComponent
  }
]

@NgModule({
  declarations: [
    PostComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(
      fromPost.postFeatureKey, fromPost.reducer,
    ),
    MaterialModule],
  exports:[
    PostComponent
  ]
})
export class PostModule { }
