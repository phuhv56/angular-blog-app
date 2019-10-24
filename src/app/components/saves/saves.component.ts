import { Post } from './../../models/post.model';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.component.html',
  styleUrls: ['./saves.component.css']
})
export class SavesComponent implements OnInit {
  posts: Post[];
  saveSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.saveSubscription = this.postService.saveObservable.subscribe(posts=> this.posts = posts);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.saveSubscription.unsubscribe();
  }
}
