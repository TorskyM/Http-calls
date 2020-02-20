import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPageModule } from './pages/users-page/users-page.module';
import { PostsPageModule } from './pages/posts-page/posts-page.module'
import { PostDetailsPageModule } from './pages/post-details-page/post-details-page.module';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () => UsersPageModule
  },
  {
    path: 'user-posts',
    loadChildren: () => PostsPageModule
  },
  {
    path: 'post-details',
    loadChildren: () => PostDetailsPageModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PostsPageModule,
    PostDetailsPageModule,
    UsersPageModule
  ],
  exports: [RouterModule,
    PostsPageModule,
    PostDetailsPageModule,
    UsersPageModule
  ]
})

export class RoutesModule { }
