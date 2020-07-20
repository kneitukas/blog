import { PostSandbox } from './../../services/post.sandbox';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent implements OnInit {

  post: any;
  constructor(private location: Location, private sandbox: PostSandbox) { }

  ngOnInit(): void {
    this.post = this.location.getState()
  } 

}
