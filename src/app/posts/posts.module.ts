import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';

@NgModule({
    imports: [PostsRoutingModule, CommonModule], 
    exports: [],
    declarations: [PostsComponent],
    providers: [],
})
export class PostsModule { }  
