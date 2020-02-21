import { Action } from '@ngrx/store';

import { Post } from 'src/app/interfaces/post.interface';

export enum PostActionType {
    AddPost = '[Post] Add post',
    RemovePost = '[Post] Remove post',
    ChagePost = '[Post] Chage post'
}

export class AddPost implements Action {
    constructor(public readonly payload: Post) { }

    public static readonly TYPE = PostActionType.AddPost;
    public type = AddPost.TYPE;
}

export class RemovePost implements Action {
    constructor(public readonly payload: Post) { }

    public static readonly TYPE = PostActionType.RemovePost;
    public type = RemovePost.TYPE;
}

export class ChagePost implements Action {
    constructor(public readonly payload: Post) { }

    public static readonly TYPE = PostActionType.ChagePost;
    public type = ChagePost.TYPE;
}