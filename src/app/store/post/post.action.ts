import { Action } from '@ngrx/store';

import { Post } from 'src/app/interfaces/post.interface';

export enum PostActionType {
    SetPost = '[Post] Set post',
    GetPost = '[Post] Get post',
}

export class SetPost implements Action {
    constructor(public readonly payload: Post) { }

    public static readonly TYPE = PostActionType.SetPost;
    public type = SetPost.TYPE;
}

export class GetPost implements Action {
    constructor(public readonly payload = null) { }

    public static readonly TYPE = PostActionType.GetPost;
    public type = GetPost.TYPE;
}

export type PostActions = SetPost | GetPost;