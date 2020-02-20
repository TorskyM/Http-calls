import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
      path: 'post-details',
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