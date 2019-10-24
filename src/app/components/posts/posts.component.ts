import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  loading = true;

  constructor(public postService: PostService, public router: Router) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(posts=> {
      this.posts = posts;
      this.loading = false;
    });
  }

  postClick(id: number) {
    this.router.navigate(['/post/' + id])
  }

}
