import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsPageModule } from './pages/posts-page/posts-page.module'
import { PostDetailsPageModule } from './pages/post-details-page/post-details-page.module';

const routes: Routes = [
  {
    path: 'user-posts',
    loadChildren: () => PostsPageModule
  },
  {
    path: 'post-details',
    loadChildren: () => PostDetailsPageModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
