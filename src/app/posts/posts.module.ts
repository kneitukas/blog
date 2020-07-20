import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { MaterialModule } from '../shared/material/material.module';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [PostsRoutingModule, CommonModule, MaterialModule, ReactiveFormsModule], 
    exports: [],
    declarations: [PostsComponent, NewPostComponent], 
    providers: [], 
})
export class PostsModule { }  
