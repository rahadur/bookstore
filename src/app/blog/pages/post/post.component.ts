import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, of, pipe, tap } from 'rxjs';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: any;

  loading = true;

  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService
  ) { }

  ngOnInit(): void {

    this.postForm = this.fb.group({
      userId: [''],
      title: [''],
      body: ['']
    })

    console.log('Before Http Call');

    this.postService.fetchPosts().pipe(
      tap(() => {
        this.loading = false;
      }),
      catchError((error) => {
        console.log(error);
        return of(error)
      })
    ).subscribe((posts) => {
      //this.loading = false;
      this.posts = posts;
    })

    console.log('After Http Call');
  }


  createPost() {
    console.log(this.postForm.value);
    this.postService.createPost(this.postForm.value).subscribe((post) => {
      console.log(post);
    })
  }




}
