import { Post } from "./post.model";

export interface AppState {
    readonly posts: Array<Post>
}