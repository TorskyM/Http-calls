import { Component, OnInit, OnDestroy } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { PostFacade } from '../../store/post/post.facade'

import { Post } from 'src/app/interfaces/post.interface';
import { ModalService } from '../../shared/services/modal-service';
import { HttpService } from 'src/app/shared/services/http.service';

import { Subscription } from 'rxjs';

@AutoUnsubscribe()
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.html',
  styleUrls: ['./post-edit.scss']
})

export class PostEditComponent implements OnInit, OnDestroy {

  constructor(
    private readonly modalService: ModalService,
    private readonly httpService: HttpService,
    private readonly postFacade: PostFacade
  ) { }

  public post: Post = {
    userId: null,
    id: null,
    title: '',
    body: ''
  };
  public postId: number;
  public storeSub: Subscription;

  public ngOnInit(): void {
    this.postFacade.currentPost$.subscribe(post => this.post = post);
  }

  public onSubmit(): void {
    if (this.post.id && this.post.title && this.post.body) {
      this.httpService.changePost(this.post);

      this.closeModal();
    }
  }

  public closeModal(): void {
    this.modalService.close();
  }

  public openModal(): void {
    this.modalService.open();
  }

  public ngOnDestroy(): void { }
}
