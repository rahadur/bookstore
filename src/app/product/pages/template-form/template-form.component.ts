import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  product = {
    name: '',
    email: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.product);
    
  }

}
