import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor( public product : ProductService ){
  }
  clickme(){
   this.product.productAdded();
  }
}