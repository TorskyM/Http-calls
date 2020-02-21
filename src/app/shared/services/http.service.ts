import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { Observable, Subscription } from 'rxjs';

import { URLs } from '../../app.enum';
import { Post } from 'src/app/interfaces/post.interface';

@AutoUnsubscribe()
@Injectable({
  providedIn: 'root'
})
export class HttpService implements OnDestroy {

  constructor(private readonly http: HttpClient) { }

  public postSub: Subscription;
  public putSub: Subscription;

  public getUsers(): Observable<any> {
    return this.http.get(URLs.users);
  }

  public getUserPosts(userId: string): Observable<Post> {
    return this.http.get<Post>(`${URLs.userPosts}${userId}`);
  }

  public getPostById(postId: string): Observable<Post> {
    return this.http.get<Post>(`${URLs.postDetails}${postId}`);
  }

  public createPost(post: Post) {
   this.postSub = this.http.post(URLs.posts, { title: post.title, body: post.body }).subscribe();
  }

  public changePost(postId: number, post: Post){
  this.putSub = this.http.put(`${URLs.postDetails}${postId}`, post)
  .subscribe(res => console.log(res, 'success'), err => console.log(err, 'error'));
  }

  public ngOnDestroy(): void { }
}
