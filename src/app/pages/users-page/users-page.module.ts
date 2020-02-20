import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UsersPageComponent } from '../../pages/users-page/users-page.component';

const routes: Routes = [
    {
      path: 'users',
      component: UsersPageComponent,
    }
  ];

  @NgModule({
    declarations: [
      UsersPageComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class UsersPageModule { }