import { Component, OnInit, Input } from '@angular/core';

import { IComment } from 'src/app/interfaces/comment.inteface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.html',
  styleUrls: ['./comment.scss']
})
export class CommentComponent implements OnInit {

  constructor() { }

  @Input() public comment: IComment;

  ngOnInit(): void {
  }

}
