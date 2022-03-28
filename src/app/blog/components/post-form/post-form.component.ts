import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: 'post-form.component.html',
})
export class PostFormComponent implements OnInit {

  @Input() post = null
  @Input() editMode = false;
  @Output() onSubmit = new EventEmitter();

  postForm: FormGroup;
  
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.postForm = this.fb.group({
      id: [this.post ? this.post?.id : ''],
      userId: [this.post ? this.post.userId : ''],
      title: [this.post ? this.post.title : ''],
      body: [this.post ? this.post.body : ''],
    });

  }

  submit(): void {
    this.onSubmit.emit(this.postForm.value)
    this.postForm.reset()
  }
}
