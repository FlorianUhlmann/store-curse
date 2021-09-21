import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsInterceptor } from './charts-http-interceptor';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ChartsComponent
  }
];


@NgModule({
  declarations: [
    ChartsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ChartsComponent
  ],
  providers: [
      {
          provide: HTTP_INTERCEPTORS,
          useClass: ChartsInterceptor,
          multi: true
      }
  ],

})
export class ChartsModule { }
