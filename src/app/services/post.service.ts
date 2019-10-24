import { Post } from '../models/post.model';
import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[];
  postSubject: Subject<any> = new Subject();
  saveObservable = new Observable<Post[]> (observe => {
    observe.next(this.posts);
  });

  constructor(private http: HttpClient) { 
    this.posts = [];
  }

  ngOnInit(): void {
    
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  savePost(post: Post) {
    this.posts.push(post);
  }
}
