import { PostService } from './../../services/post.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input("title") title: string;
  @Input("content") content: string;
  @Input("id") id: number;
  @Input("loading") loading = true;

  constructor(private route: ActivatedRoute,
    private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.postService.getPost(params['id']).subscribe(post => {
          this.title = post.title;
          this.content = post.body;
          this.id = post.id;
          this.loading = false;
        })
      }
    })
  }

}
