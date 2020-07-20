import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/models/app-state.model'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
   this.posts =  this.store.select( store => store.posts)
  }

}
