import { ActionReducerMap } from '@ngrx/store';

import * as fromPost from './post/post.reducer';

export interface IAppState {
    postData: fromPost.IState;
}

export const appReducer: ActionReducerMap<IAppState> = {
    postData: fromPost.PostReducer,
}