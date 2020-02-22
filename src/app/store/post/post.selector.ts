import { createSelector } from '@ngrx/store';

import { IState } from '../post/post.reducer';
import { getPost } from '../app.selectors';

export const getPostData = createSelector(
	getPost,
	(state: IState) => state.currentPost
);
