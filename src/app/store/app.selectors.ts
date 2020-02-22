import { IAppState } from './app.store';

export const getPost = (state: IAppState) => state.postData;