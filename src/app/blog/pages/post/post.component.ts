import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, mergeMap, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: any;

  loading = true;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    console.log('Before Http Call');

    
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(

      tap(() => {
        console.log('Data Loaded..');
        this.loading = false;
      }),

      map((posts: any) => {
        return posts.filter((p) => p.userId === 4);
      })

    ).subscribe((posts) => {
      this.posts = posts;
    })

    console.log('After Http Call');
  }

}
