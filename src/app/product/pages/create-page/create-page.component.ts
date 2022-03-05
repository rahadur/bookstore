import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  productFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name: [''],
      description: [''],
      price: [0]
    });
  }

  createProduct() {
    console.log(this.productFormGroup.value);
    // POST api.domain.com/product/create
  }

}
