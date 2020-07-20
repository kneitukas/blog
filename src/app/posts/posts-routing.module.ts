import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts.component';
import { NewPostComponent } from './pages/new-post/new-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent  },
  { path: 'new', component: NewPostComponent },
  { path: 'edit/:postId', component: NewPostComponent }

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
