import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostDetailsComponent } from '../../components/post-details/post-details.component';

const routes: Routes = [
    {
      path: 'post-details/:id',
      component: PostDetailsComponent,
    }
  ];

  @NgModule({
    declarations: [
      PostDetailsComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [
      PostDetailsComponent,
      RouterModule
    ]
  })

  export class PostDetailsPageModule { }