import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/models/app-state.model';
import { AddPostAction } from '../../../store/actions/posts.actions';

@Component({
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
@ViewChild('picker1') picker;
form: FormGroup;
public mode = 'create'
private postId: string;

  constructor(public route: ActivatedRoute, private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: [null,{validators: [Validators.required, Validators.minLength(3)]}],
      title: [null,{validators: [Validators.required]}],
      text: [null,{validators: [Validators.required]}],
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
      }
    })
  }

onSubmit() {
  if (this.form.valid) {
    this.store.dispatch(new AddPostAction(this.form.value))
    this.form.reset()
    console.log(this.form.value)
  }
}

}
