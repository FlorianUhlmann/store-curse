import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostCardComponent } from './post-card.component';
import { MaterialModule } from '../material-module';



@NgModule({
  declarations: [
    PostComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
  MaterialModule],
  exports:[
    PostComponent
  ]
})
export class PostModule { }
