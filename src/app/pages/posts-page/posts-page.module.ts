import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'wishlist',
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