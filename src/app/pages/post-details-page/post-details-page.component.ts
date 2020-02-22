import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { ToastrService } from 'ngx-toastr';

import { PostFacade } from '../../store/post/post.facade';

import { HttpService } from 'src/app/shared/services/http.service';

import { Post } from 'src/app/interfaces/post.interface';
import { Subscription, Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal-service';
import { ToastrMessage } from '../../app.enum';


@AutoUnsubscribe()
@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.html',
  styleUrls: ['./post-details-page.scss']
})
export class PostDetailsPageComponent implements OnInit, OnDestroy {

  constructor(
    public modalService: ModalService,
    private readonly httpService: HttpService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly toastrService: ToastrService,
    private readonly postFacade: PostFacade
  ) { }

  public postId: string;
  public post: Post;
  public comments$: Observable<Array<Post>>;
  public routerSub: Subscription;
  public postSub: Subscription;

  public ngOnInit(): void {
    this.routerSub = this.route.params.subscribe(value => {
      this.postId = value.id;
      
      this.comments$ = this.httpService.getPostComments(this.postId);
    });
    this.postSub = this.httpService.getPost(this.postId).subscribe(data => {
      this.post = data;
      this.postFacade.SetPost(this.post);
    });
  }

  public onPostEdit(): void {
    this.modalService.modalTypeAdd = false;

    this.openModal();
  }

  public onPostDelete(): void {
    this.httpService.deletePost(this.post.id);
    this.postFacade.RemovePost()

    this.post = {
      userId: null,
      id: null,
      title: '',
      body: ''
    };

    this.router.navigateByUrl('/users');

    this.toastrService.success(ToastrMessage.postDelete);
  }

  public closeModal(): void {
    this.modalService.close();
  }

  public openModal(): void {
    this.modalService.open();
  }

  public ngOnDestroy(): void { }
}
