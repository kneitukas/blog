import { NgModule } from '@angular/core';
import { PostsRoutingModule } from './posts-routing.module';
import { NewPostComponent } from './pages/new-post/new-post.component';

@NgModule({
    imports: [PostsRoutingModule],
    exports: [],
    declarations: [NewPostComponent],
    providers: [],
})
export class PostsModule { }
