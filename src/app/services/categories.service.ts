import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService {

    url = environment.api;

    constructor(private http: HttpClient) { }

    getCategories() : Observable<any> {
        return this.http.get(`${this.url}categories/`)
    }

    getCategoryById(id) : Observable<any> {
        return this.http.get(`${this.url}categories/${id}`)
    }
    
}