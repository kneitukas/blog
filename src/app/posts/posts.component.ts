import { PostSandbox } from './services/post.sandbox';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../store/models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]>;
  constructor(private sandbox: PostSandbox, private router: Router) { }

  ngOnInit(): void {
   this.posts$ = this.sandbox.posts$
  }

  openPost(post, i) {
    console.log(post)
    this.router.navigateByUrl(`/posts/list/${i}`, {state: post})
  }

}
