import { Post } from './../models/post';
import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
