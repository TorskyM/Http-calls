import { Component } from '@angular/core';

import { Post } from 'src/app/interfaces/post.interface';
import { ModalService } from '../../shared/services/modal-service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.html',
  styleUrls: ['./new-post.scss']
})

export class NewPostComponent {

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
