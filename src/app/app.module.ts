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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([PostEffects]),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
