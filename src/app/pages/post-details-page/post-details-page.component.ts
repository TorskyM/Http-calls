import { Component, OnInit, OnDestroy } from '@angular/core';

import { HttpService } from 'src/app/shared/services/http.service';
import { ActivatedRoute } from '@angular/router';

import { Post } from 'src/app/interfaces/post.interface';
import { Subscription, Observable } from 'rxjs';
import { ModalService } from 'src/app/shared/services/modal-service';

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
  ) { }

  public post: Post;
  public post$ : Observable<Post>;
  public comments$: Observable<Array<Post>>;
  public routerSub: Subscription;

  public ngOnInit(): void {
    this.routerSub = this.route.params.subscribe(value => {
      //TODO Use subscribe instead of async pipe,
      // accumulate value in variablea and use store(AddPostAction)
      // and select this post in editPost component
      this.post$ = this.httpService.getPost(value.id);
      this.comments$ = this.httpService.getPostComments(value.id);
    });
  }

  public onPostEdit(): void {
    this.modalService.modalTypeAdd = false;
    this.openModal();
  }

  public onPostDelete(): void {
    this.httpService.deletePost(this.post.id);
  }

  public closeModal(): void {
    this.modalService.close();
  }

  public openModal(): void {
    this.modalService.open();
  }

  public ngOnDestroy(): void { }
}
