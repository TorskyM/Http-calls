import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HttpService } from 'src/app/shared/services/http.service';
import { Post } from 'src/app/interfaces/post.interface';
import { ModalService } from 'src/app/shared/services/modal-service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.html',
  styleUrls: ['./posts-page.scss']
})
export class PostsPageComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute, public modalService: ModalService,) {
    
   }

  public posts$: Observable<Post>;

  public userId: string = '';
  public posts: Array<Post> = [];

  public ngOnInit(): void {
   this.route.data.forEach(data => this.posts = data.posts);
  }

  public closeModal(): void {
    this.modalService.close();
  }

  public openModal(): void {
    this.modalService.open();
  }
}
