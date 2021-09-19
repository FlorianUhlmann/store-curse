import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule  } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { reducers } from './store/app.store';
import { PostEffects } from './store/post/post.effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { AppRoutingModule } from '../app-routing.module';
import { PostModule } from './post/post.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NxExpertModule } from '@aposin/ng-aquila/config';
import { AlbumsModule } from './albums/albums.module';
import { AlbumResolver } from './store/album/album.resolver';
import { albumReducer } from './store/album/album.reducer';
import { AlbumEffects } from './store/album/album.effect';
@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    PostModule,
    AlbumsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AlbumEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
    NxExpertModule
  ],
  providers: [AlbumResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
