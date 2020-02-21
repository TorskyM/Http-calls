import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserComponent } from '../../components/user/user.component';
import { PostComponent } from '../../components/post/post.component';
import { NewPostComponent } from '../../components/new-post/new-post.component';
import { ModalComponent } from '../services/modal-window/modal-window.component';

  @NgModule({
    declarations: [
      UserComponent,
      PostComponent,
      NewPostComponent,
      ModalComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
    ],
    exports: [
			RouterModule,
      UserComponent,
      PostComponent,
      NewPostComponent,
      ModalComponent,
      FormsModule
    ]
  })

export class SharedModule { }