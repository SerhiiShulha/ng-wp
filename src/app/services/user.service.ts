import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    url = environment.api;

    constructor(private http: HttpClient) { }

    getUsersList() : Observable<any> {
        return this.http.get(`${this.url}users/`);
    };
}