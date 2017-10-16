import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TagsService {
    url = environment.api;
    
    constructor(private http: HttpClient) { }
    
    getTags() : Observable<any> {
        return this.http.get(`${this.url}tags/`)
    }
    
    getTagById(id) : Observable<any> {
        return this.http.get(`${this.url}tags/${id}`)
    }
    
}