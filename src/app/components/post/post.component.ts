import { Component, Input } from '@angular/core';

import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.html',
  styleUrls: ['./post.scss']
})
export class PostComponent {

  @Input() public post: Post = {
    userId: null,
    id: null,
    title: '',
    body: ''
  };
}
