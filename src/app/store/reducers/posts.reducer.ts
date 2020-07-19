import { Post } from "../models/post.model";
import { InitialState } from "@ngrx/store/src/models";
import { PostsAction, PostsActionTypes } from "../actions/posts.actions";

const initialState: Array<Post> = [
    {id: 1, date: '2020-11-20', title: 'first post', text: 'this is a text' }
]

export function PostsReducer(state: Array<Post> = initialState, action: PostsAction) {

    switch(action.type) {
        case PostsActionTypes.ADD_POST:
            return [...state, action.payload]
        default:
            return state
    }
}