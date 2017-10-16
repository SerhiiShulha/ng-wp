import { UserService } from '../services/user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
    users : any = []; 
    // author : any;

    constructor(private userService: UserService) { }

    ngOnInit() : void { 
        this.getUsers();
    }

    getUsers() : void {
        this.userService.getUsersList().subscribe(data => this.users = data, error => console.log(error.data));
    }
}