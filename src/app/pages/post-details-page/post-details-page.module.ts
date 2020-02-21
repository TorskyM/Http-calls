import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostDetailsPageComponent } from '../../pages/post-details-page/post-details-page.component';
import { SharedModule } from '../../shared/services/shared.module';

const routes: Routes = [
    {
      path: 'post-details/:id',
      component: PostDetailsPageComponent,
    }
  ];

  @NgModule({
    declarations: [
      PostDetailsPageComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      SharedModule
    ],
    exports: [
      PostDetailsPageComponent,
      RouterModule
    ]
  })

  export class PostDetailsPageModule { }