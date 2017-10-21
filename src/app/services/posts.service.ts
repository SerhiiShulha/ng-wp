import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {
    url = environment.api;

    constructor(private http: HttpClient) { };

    getPostsList() : Observable<any> {
        return this.http.get(`${this.url}posts/?_embed&?per_page=10`);
    };

    getPostById(id) : Observable<any> {
        return this.http.get(`${this.url}posts/${id}`);
    }
    
}