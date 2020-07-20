import { AppState } from '../../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostSandbox {

    posts$ = this.store.select( store => store.posts)

    constructor(private store: Store<AppState>) {}
     
}