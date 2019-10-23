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

  constructor(private route: ActivatedRoute,
    private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.title = params['id'] + "Title";
      this.content = params['id'] + "Content";
    })
  }

}
