import { ActivatedRoute, ParamMap } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-full-post',
    templateUrl: 'full-post.component.html'
})

export class FullPostComponent implements OnInit {
    
    post : any = {};
    // id: number;

    constructor(private postService: PostsService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            const id = params.get('postId');
            this.postService.getPostById(id).subscribe(
                data => this.post = data,
                error => console.log(error.data)
            );
        });
    }

    // getFullPost() : void {
    //     this.postService.getPostById().subscribe(
    //         data => this.post = data,
    //         error => console.log(error.data)
    //     );
    // }
}