import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { BlogRoutingModule } from './blog-routing.module';
import { PostService } from './services/post.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './pages/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';


@NgModule({
  declarations: [
    PostComponent,
    EditPostComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService
  ]
})
export class BlogModule { }
