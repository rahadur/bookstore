import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() item: string = '';
  
  @Output() onAddToCart = new EventEmitter<any>();


  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  addToCart(): void {
    console.log(this.item);
    this.onAddToCart.emit({ price: 200, discount: 10})
  }

  gotoDetails(): void {
    const slug = 'product-title'

    this.router.navigateByUrl(`/product/${slug}`) 
    //this.router.navigate(['/product/product-title-slug', {id: slug}])
  }

}
