import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productedAddded = new Subject <boolean>();
  constructor() { }

  productAdded(){
    this.productedAddded.next(true );
  }
}
