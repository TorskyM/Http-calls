import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { HttpService } from '../services/http.service';
import { Post } from 'src/app/interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<Post> {
  constructor(private readonly httpService: HttpService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Post> {
    return this.httpService.getUserPosts(route.paramMap.get('id'))
      .pipe(take(1)) as Observable<Post>;
  }
}
