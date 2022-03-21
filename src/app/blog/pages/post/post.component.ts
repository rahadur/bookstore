import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log('Before Http Call');

    
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((posts: any) => {
      //console.log(posts);
      this.posts = posts;
    })

    console.log('After Http Call');
  }

}
