import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello-angular',
  templateUrl: 'hello-angular.component.html',
})
export class HelloAngularComponent {

  @Input() name: string = '';
  
  constructor() {}
}
