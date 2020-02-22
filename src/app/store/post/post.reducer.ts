import { SetPost, GetPost, PostActions } from './post.action';

import { Post } from 'src/app/interfaces/post.interface';


export interface IState {
	currentPost: Post;
}

export const initialState: IState = {
	currentPost: {
		userId: null,
		id: null,
		title: '',
		body: ''
	}
};

export function PostReducer(state = initialState, action: PostActions): IState {
	const { type, payload } = action;

	switch (type) {
		case SetPost.TYPE:
			return {
				...state,
				currentPost: payload
			};
		case GetPost.TYPE:
			return { ...initialState };

		default:
			return state;
	}
}