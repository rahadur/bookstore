import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPosts(): Observable<any> {
/*       const params = new HttpParams()
        .append('status', 'active')
        .append('sort', 'created_date') */

    return this.http.get('https://jsonplaceholder.typicode.com/posts' );
  }

  createPost(post: any) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }
}
