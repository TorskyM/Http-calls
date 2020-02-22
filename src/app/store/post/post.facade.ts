import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { IAppState } from '../app.store';
import { SetPost, GetPost } from '../post/post.action';
import { getPostData } from './post.selector';

import { Post } from 'src/app/interfaces/post.interface';

@Injectable({
	providedIn: 'root'
})
export class PostFacade {
	public currentPost$ = this.store.select(getPostData);

	constructor(private store: Store<IAppState>) { }

	public SetPost(post: Post): void {
    this.store.dispatch(new SetPost(post));
	}

	public RemovePost(): void {
    this.store.dispatch(new GetPost());
	}
}
