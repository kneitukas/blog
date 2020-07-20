import { PostResolver } from './services/post.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { PostPreviewComponent } from './pages/post-preview/post-preview.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: PostsComponent},
  { path: 'list/:postId', component: PostPreviewComponent}, 
  { path: 'new', component: NewPostComponent },
  { path: 'edit/:postId', component: NewPostComponent }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
