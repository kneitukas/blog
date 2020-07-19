import { Action } from '@ngrx/store'
import { Post } from '../models/post.model'

export enum PostsActionTypes {
    ADD_POST = '[POSTS] Add Post'
}

export class AddPostAction implements Action {
   readonly type = PostsActionTypes.ADD_POST;

   constructor(public payload: Post) {}
}

export type PostsAction = AddPostAction;