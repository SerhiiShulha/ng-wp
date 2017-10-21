import { MediaService } from '../services/media.service';
import { TagsService } from '../services/tags.service';
import { CategoriesService } from '../services/categories.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { UserService } from '../services/user.service';
import { PostsService } from '../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {

    posts : any = [];
    categories : any = [];
    tags : any = [];
    

    constructor(private http: HttpClient, private mediaService: MediaService, 
        private postsService: PostsService, private userService: UserService, 
        private categoriesService: CategoriesService, private tagsService: TagsService) { 

    }

    ngOnInit() : void {
        this.getPosts();   
    }
    
    getPosts() : void{
        this.postsService.getPostsList()
            .subscribe(postsData => {
                this.posts = postsData;
                console.log(postsData);
            })
    }
}