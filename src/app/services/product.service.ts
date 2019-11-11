import { Injectable } from '@angular/core';
import { Product } from '../model/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private products: Array<Product> = [{
    id: 1,
    name: 'Frock',
    description: 'kids frock',
    image: 'https://c.76.my/Malaysia/kids-dress-cny-dress-dress-age-1-8-m10-021-grey-pre-order-kiddyzone-1711-13-KIDDYZONE@37.jpg',
    price: 899,
    is_available: true
  },
  {
    id: 2,
    name: 'Heels',
    description: 'kids heels',
    image: 'https://my-test-11.slatic.net/p/b03179147f9ac84a635525da8d6e95ba.jpg',
    price: 999,
    is_available: false
  },
  {
    id: 3,
    name: 'Party Wear',
    description: 'kids boys party wear',
    image: 'https://sc01.alicdn.com/kf/HTB1LJ9lbP3z9KJjy0Fm760iwXXag/Hot-style-boys-party-wear-dress-kids.png',
    price: 1999,
    is_available: true
  }
  ];
  constructor() { }

  getProduct() {
    return this.products;
  }

  addProduct(obj) {
    this.products.push(obj);
    return this.products;
  }

}
