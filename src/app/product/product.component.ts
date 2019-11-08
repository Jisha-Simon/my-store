import { Component, OnInit } from '@angular/core';
import {Product} from '../model/productInterface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [{
    name: 'Frock',
    description: 'kids frock',
    imagealt: 'https://c.76.my/Malaysia/kids-dress-cny-dress-dress-age-1-8-m10-021-grey-pre-order-kiddyzone-1711-13-KIDDYZONE@37.jpg',
    price: 899,
    availability: true
  },
  {
    name: 'Heels',
    description: 'kids heels',
    imagealt: 'https://my-test-11.slatic.net/p/b03179147f9ac84a635525da8d6e95ba.jpg',
    price: 999,
    availability: false
  },
  {
    name: 'Party Wear',
    description: 'kids boys party wear',
    imagealt: 'https://sc01.alicdn.com/kf/HTB1LJ9lbP3z9KJjy0Fm760iwXXag/Hot-style-boys-party-wear-dress-kids.png',
    price: 1999,
    availability: true
  }

  ];
  constructor() { }

  ngOnInit() {
  }

}
