import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
form: FormGroup;
public mode = 'create'
private postId: string;

  constructor(public route: ActivatedRoute, private fb: FormBuilder) { }

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
    console.log(this.form.value)
  }
}

}
