import { TagsService } from '../services/tags.service';
import { CategoriesService } from '../services/categories.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
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
    

    constructor(private http: HttpClient, private postsService: PostsService, private userService: UserService, private categoriesService: CategoriesService, private tagsService: TagsService) { 

    }

    ngOnInit() : void {
        this.getPosts();   
    }
    
    getPosts() : void{
        this.postsService.getPostsList()
            .subscribe(postsData => {
                postsData.map(post=>{

                    let authorId : number = post.author;
                    this.userService.getUser(authorId).subscribe(
                        authorObj => {
                            post['authorName'] = authorObj.name;
                        }
                    );

                    let categoryList : any = [];
                    post.categories.map(category => {
                        let categoryId : number = category;
                        this.categoriesService.getCategoryById(categoryId).subscribe(
                            categoryObj => categoryList.push(categoryObj.name)
                        );
                    });
                    post['categoryNames'] = categoryList;

                    let tagsList : any = [];
                    post.tags.map(tag => {
                        let tagId : number = tag;
                        this.tagsService.getTagById(tagId).subscribe(
                            tagObj => tagsList.push(tagObj.name)
                        );
                    });
                    post['tagNames'] = tagsList;
                    
                    
                });
                this.posts = postsData;
                console.log(postsData);
            })
    }
}