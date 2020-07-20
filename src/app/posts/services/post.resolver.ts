import { PostSandbox } from './post.sandbox';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, empty } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<any> {

    constructor(private sandbox: PostSandbox) {}
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
       return this.sandbox.posts$.pipe(
            catchError( err => empty())
        )
    }
}