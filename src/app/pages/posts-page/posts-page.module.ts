import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostsListComponent } from '../../components/posts-list/posts-list.component';

const routes: Routes = [
    {
      path: 'user-posts',
      component: PostsListComponent,
    }
  ];

  @NgModule({
    declarations: [
      PostsListComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [
      PostsListComponent,
      RouterModule
    ]
  })

  export class PostsPageModule { }