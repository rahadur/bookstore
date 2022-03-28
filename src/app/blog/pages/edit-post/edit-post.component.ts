import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {

  post: any

  constructor(
    private navigationService: NavigationService,
    private postService: PostService) {
      this.post = this.navigationService.post;
    }

  ngOnInit(): void {
  }

  updatePost(post) {

  }
}
