import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCardComponent } from './post-card.component';
import { MaterialModule } from '../material-module';
import { RouterModule, Routes } from '@angular/router';

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
    MaterialModule],
  exports:[
    PostComponent
  ]
})
export class PostModule { }
