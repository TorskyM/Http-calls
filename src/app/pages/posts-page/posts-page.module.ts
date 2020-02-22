import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostsPageComponent } from '../../pages/posts-page/posts-page.component';
import { PostsResolver } from 'src/app/shared/services/posts.resolver';
import { SharedModule } from '../../shared/services/shared.module';

const routes: Routes = [
    {
      path: 'user-posts/:id',
      component: PostsPageComponent,
      resolve: { posts: PostsResolver }
    }
  ];

  @NgModule({
    declarations: [
      PostsPageComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      SharedModule,
    ],
    providers: [
      PostsResolver
    ],
    exports: [
      PostsPageComponent,
      RouterModule,
      SharedModule
    ]
  })

export class PostsPageModule { }
