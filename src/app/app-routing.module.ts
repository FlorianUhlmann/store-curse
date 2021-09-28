import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'posts' ,
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)
  },
  { path: 'albums',
   loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule)
  },
  { path: 'charts',
    loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
  },
  { path: 'employees',
   loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
  { path: ''      , redirectTo: '/posts', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
