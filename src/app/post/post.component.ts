import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    posts = [{
        id: 1, 
        postname: 'Post 1 name',
        author: 's_shulga',
        authoravatar: 'https://placeimg.com/300/300/people',
        date: '05.10.2017',
        img: 'http://www.guoguiyan.com/data/out/124/68505012-material-wallpapers.png',
        postpreview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, nemo recusandae incidunt sunt eum quia nihil quasi eligendi quo fugit veritatis, tenetur maiores repudiandae omnis vel. Saepe, ab voluptatibus?Corporis ipsam reprehenderit explicabo tempore quis, similique, quisquam ex ad cumque eligendi quas quam commodi id! Quae nihil, ullam voluptatum alias eveniet veniam praesentium minima repudiandae, repellat eos optio suscipit.',
        tags: [
            {id: 1, tag: 'Tag 1'},
            {id: 2, tag: 'Tag 2'},
            {id: 3, tag: 'Tag 3'}
        ]
    },
    {
        id: 2, 
        postname: 'Post 2 name',
        author: 'john_smith',
        authoravatar: 'https://placeimg.com/300/300/animals',
        date: '01.10.2017',
        img: 'https://lh3.googleusercontent.com/2bXQgsxkYthpsQILh-kX0A4fzi21Y40eHYNWCWLDuz6-JNRXN831hRwZhj7SI5kmflE=h900',
        postpreview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, nemo recusandae incidunt sunt eum quia nihil quasi eligendi quo fugit veritatis, tenetur maiores repudiandae omnis vel.',
        tags: [
            {id: 1, tag: 'Tag 1'},
            {id: 2, tag: 'Tag 2'},
            {id: 3, tag: 'Tag 3'},
            {id: 4, tag: 'Tag 3'}
        ]
    },
    {
        id: 3, 
        postname: 'Post 3 name',
        author: 'samantha',
        authoravatar: 'https://placeimg.com/300/300/tech',
        date: '23.09.2017',
        img: 'https://s-media-cache-ak0.pinimg.com/originals/d2/b8/fc/d2b8fc669367ac5eac78f9f2d4186913.png',
        postpreview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque atque, nemo recusandae incidunt sunt eum quia nihil quasi eligendi quo fugit veritatis, tenetur maiores repudiandae omnis vel. Quae nihil, ullam voluptatum alias eveniet veniam praesentium minima repudiandae, repellat eos optio suscipit.',
        tags: [
            {id: 1, tag: 'Tag 1'},
            {id: 2, tag: 'Tag 2'}
        ]
    }
    ];
}