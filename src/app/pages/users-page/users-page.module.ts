import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/services/shared.module';

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
      SharedModule,
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class UsersPageModule { }