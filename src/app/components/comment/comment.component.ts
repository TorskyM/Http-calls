import { Component, Input } from '@angular/core';

import { IComment } from 'src/app/interfaces/comment.inteface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.html',
  styleUrls: ['./comment.scss']
})
export class CommentComponent {
  @Input() public comment: IComment;
}
