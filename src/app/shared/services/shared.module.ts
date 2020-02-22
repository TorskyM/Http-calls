import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserComponent } from '../../components/user/user.component';
import { PostComponent } from '../../components/post/post.component';
import { NewPostComponent } from '../../components/new-post/new-post.component';
import { ModalComponent } from '../modal-window/modal-window.component';
import { PostDetailsComponent } from '../../components/post-details/post-details.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { PostEditComponent } from '../../components/post-edit/post-edit.component';

  @NgModule({
    declarations: [
      UserComponent,
      PostComponent,
      NewPostComponent,
      ModalComponent,
      PostDetailsComponent,
      CommentComponent,
      PostEditComponent
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
      FormsModule,
      PostDetailsComponent,
      CommentComponent,
      PostEditComponent
    ]
  })

export class SharedModule { }