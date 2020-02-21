import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/interfaces/post.interface';
import { ModalService } from '../../shared/services/modal-service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.html',
  styleUrls: ['./post-edit.scss']
})

export class PostEditComponent implements OnInit {

  constructor(
    private readonly modalService: ModalService,
    private readonly httpService: HttpService
  ) { }

  public post: Post = {
    userId: 1,
    id: 1,
    title: '',
    body: ''
  };

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    if(this.post.userId && this.post.title && this.post.body){
      this.httpService.createPost(this.post);
      this.closeModal();
    }
  }

  public closeModal(): void {
    this.modalService.close();
  }

  public openModal(): void {
    this.modalService.open();
  }
}
