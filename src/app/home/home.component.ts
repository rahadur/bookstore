import { Component, OnInit } from '@angular/core';

enum Status {
  Offer = 'Offer',
  Free = 'Free'
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  items = [
    {
      title: 'Offer Item 1',
      status: Status.Free
    },
    {
      title: 'Free Item 1',
      status: Status.Free
    },
    {
      title: 'Offer Item 2',
      status: Status.Offer
    },
    {
      title: 'Offer Item 3',
      status: Status.Offer
    }
  ]

  productValue = null;

  constructor() {}

  ngOnInit(): void {}

  receivedProductValue(value: any) {

    console.log(value);
    console.log('Called HomeComponent');

    this.productValue = value;
  }
}
