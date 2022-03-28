import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, pipe, tap } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
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

  constructor(
    private router: Router,
    private navigationService: NavigationService,
    private postService: PostService) {}

  ngOnInit(): void {

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

  createPost(post): void {
    this.postService.createPost(post).subscribe((post) => {
      console.log(post);
      this.posts.push(post)
    });
  }

  selectPost(post) {
    this.navigationService.post = post;
    this.router.navigateByUrl(`/blog/${post.id}`);
  }


  deletePost(postId): void {
    this.postService.deletePost(postId).subscribe((response) => {
      console.log(response);
      this.posts = this.posts.filter((item) => item.id !== postId);
    })
  }
}
