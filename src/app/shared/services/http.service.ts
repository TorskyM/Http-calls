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
  public deleteSub: Subscription;

  public getUsers(): Observable<any> {
    return this.http.get(URLs.users);
  }

  public getUserPosts(userId: string): Observable<Post> {
    return this.http.get<Post>(`${URLs.userPosts}${userId}`);
  }

  public getPost(userId: string): Observable<Post> {
    return this.http.get<Post>(`${URLs.posts}/${userId}`);
  }

  public getPostComments(postId: string): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${URLs.postComments}${postId}`);
  }

  public createPost(post: Post): void {
   this.postSub = this.http.post(URLs.posts, { title: post.title, body: post.body }).subscribe();
  }

  public changePost(post: Post): void{
  this.putSub = this.http.put(`${URLs.posts}/${post.id}`, post).subscribe();
  }

  public deletePost(postId: number): void {
    this.deleteSub = this.http.delete<void>(`${URLs.posts}/${postId}`).subscribe();
  }

  public ngOnDestroy(): void { }
}
