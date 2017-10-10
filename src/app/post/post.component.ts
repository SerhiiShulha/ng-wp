import { PostsService } from '../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {

    posts : any = [];

    constructor(private postsService: PostsService) { 

    }

    ngOnInit() : void {
        this.getPosts();
    }

    getPosts() : void{
        this.postsService.getPostsList().subscribe(data=>this.posts = data, error => console.log(error.data));
    }
}