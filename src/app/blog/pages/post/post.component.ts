import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, of, pipe, tap } from 'rxjs';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: any;

  loading = true;

  postForm: FormGroup;

  isUpdateForm = false;

  showAlert = false;

  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      id: [''],
      userId: [''],
      title: [''],
      body: [''],
    });

    console.log('Before Http Call');

    this.postService
      .fetchPosts()
      .pipe(
        tap(() => {
          this.loading = false;
        }),
        catchError((error) => {
          console.log(error);
          return of(error);
        })
      )
      .subscribe((posts) => {
        //this.loading = false;
        this.posts = posts;
      });

    console.log('After Http Call');
  }

  createPost() {
    console.log(this.postForm.value);

    if (!this.isUpdateForm) {
      this.postService.createPost(this.postForm.value).subscribe((post) => {
        console.log(post);
        this.posts.push(post)
      });
    } else {
      this.postService.updatePost(this.postForm.value).subscribe((post) => {
        /* const temPosts = this.posts.filter((item) => item.id !== post.id);
        temPosts.push(post); */
        //this.posts = temPosts;

        this.showAlert = true;

        const temPost = this.posts.find((item) => item.id === post.id);
        const indexOf = this.posts.indexOf(temPost);
        this.posts[indexOf] = post

        // this.postForm.patchValue({ userId: '', title: '', body: ''})
        this.postForm.reset();

        this.isUpdateForm = false;
      });
    }
  }

  selectPost(post) {
    console.log(post);
    
    this.postForm.patchValue(post);
    this.isUpdateForm = true;
  }


  deletePost(postId): void {
    this.postService.deletePost(postId).subscribe((response) => {
      console.log(response);
      this.posts = this.posts.filter((item) => item.id !== postId);
    })
  }
}
