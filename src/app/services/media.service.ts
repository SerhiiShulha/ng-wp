import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MediaService {
    url = environment.api;
    
    constructor(private http: HttpClient) { }
    
    getPostImg(parent) : Observable<any> {
        return this.http.get(`${this.url}media?parent=${parent}`)
    }
    
    // getTagById(id) : Observable<any> {
    //     return this.http.get(`${this.url}tags/${id}`)
    // }
    
}