import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: ':id',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
