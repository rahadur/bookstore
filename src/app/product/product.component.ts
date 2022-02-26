import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() item: string = '';
  
  @Output() onAddToCart = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
    console.log(this.item);
    this.onAddToCart.emit({ price: 200, discount: 10})
  }

}
